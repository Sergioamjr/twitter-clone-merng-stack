# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Monorepo Structure

Two independent workspaces — each has its own `node_modules`, `yarn.lock`, and scripts. Run commands from within `server/` or `web/`, not the root.

```
/server  — Apollo Server 4 + Express + GraphQL + MongoDB (Mongoose)
/web     — Next.js 13 + Apollo Client + Redux Toolkit + styled-components
```

## Commands

### Server (`cd server`)
```bash
yarn dev        # ts-node-dev with hot reload
yarn build      # tsc compile to ./build
yarn lint       # eslint on .ts files
yarn codegen    # regenerate server-side GraphQL types (requires server running on :4000)
```

### Web (`cd web`)
```bash
yarn dev        # Next.js dev server on :3000
yarn build      # production build
yarn test       # jest (runs web/src/**/*.spec.ts)
yarn lint       # eslint on .tsx files
yarn storybook  # Storybook on :6006
yarn codegen    # regenerate client GraphQL hooks (requires server running on :4000)
```

### Run single test
```bash
cd web && yarn test --testPathPattern=utils.spec
```

## Architecture

### Server

- **Entry**: `server/index.ts` — sets up Express, Apollo Server 4 (HTTP + WebSocket), and mounts `/graphql` and `/playground`
- **GraphQL schema**: composed from per-domain `types.ts` files (`User/`, `Tweet/`, `Comment/`) merged in `src/typeDefs.ts`
- **Resolvers**: per-domain `resolvers.ts` files spread into root `Query`, `Mutation`, `Subscription` objects in `src/resolvers.ts`
- **Database**: `src/database.ts` — Mongoose connecting via `MONGODB_URI`. Models are passed to Apollo context as `dataSources`
- **Auth token**: passed as `token` header and available in all resolvers via Apollo context
- **Generated types**: `src/generated/graphql.ts` — do not edit manually; regenerate with `yarn codegen`
- **Subscriptions**: WebSocket server at `/subscriptions` using `graphql-ws`

### Web

- **Apollo client**: `web/client.config.ts` — uses split link: subscriptions over WebSocket (`NEXT_PUBLIC_SUBSCRIPTIONS_URL`), queries/mutations over HTTP (`NEXT_PUBLIC_SERVER_URL`)
- **GraphQL hooks**: live in `src/graphql/` and are auto-generated into `src/graphql/generated/graphql.tsx`; use the generated hooks (e.g. `useGetTweetsQuery`) — do not write raw `useQuery` calls
- **State**: Redux Toolkit store with two slices — `user` (auth data persisted to localStorage via middleware) and `tweets`
- **Routing**: Next.js pages (`pages/index.tsx`, `pages/tweet/[id].tsx`, `pages/user/[id].tsx`)
- **Features vs Components**: `src/features/` holds page-level containers (data-fetching logic); `src/components/` holds presentational components with co-located styled-components files (`styled.ts` / `styles.ts`)
- **Path alias**: `~` maps to `web/src/` (configured in tsconfig and jest `moduleNameMapper`)
- **Styling**: styled-components with a shared theme at `src/theme/index.ts` (`colors`, `GlobalStyle`)

## Environment Variables

Server needs a `.env` file:
```
MONGODB_URI=...
PORT=4000
```

Web needs `.env.local`:
```
NEXT_PUBLIC_SERVER_URL=http://localhost:4000/graphql
NEXT_PUBLIC_SUBSCRIPTIONS_URL=ws://localhost:4000/subscriptions
NEXT_PUBLIC_GA=...
```

## Codegen Workflow

Both `server` and `web` use `graphql-codegen`. Server must be running on `:4000` before running `yarn codegen` in either workspace. Schema changes flow: edit `server/src/{Domain}/types.ts` → run server → run `yarn codegen` in both workspaces → commit generated files.
