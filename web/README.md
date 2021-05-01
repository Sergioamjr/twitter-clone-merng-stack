# Web - Twitter Merng Stack

## Commands

- To start the server

```bash
npm run dev
```

- To run all tests

```bash
npm run test
```

- To generate all TS types using GraphQL Codegen

```bash
npm run codegen
```

- To run lint

```bash
npm run lint
```

## Stacks

- ReactJS.
- NextJS.
- Redux.
- Typescript.
- Apollo Client.
- Styled Components.

## Validations

- ESLint
- Prettier

## Store

On the store is saved the user data and the quantity of new tweets.

## Security

- All sensive datas are storaged on .env file.
- Passwords are encrypted before be saved on database.
- A JWT token is created when user logged in, it's valid for 48h.
- The JWT token is validated in all request that relies on the database.

## Deploy

This server was deployed on Netlify.
