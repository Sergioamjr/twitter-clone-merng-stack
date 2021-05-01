# Server - Twitter Merng Stack

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

- NodeJS.
- Typescript.
- Mongo DB.
- Apollo Server.
- Express.

## Validations

- ESLint
- Prettier

## Security

- All sensive datas are storaged on .env file.
- Passwords are encrypted before be saved on database.
- A JWT token is created when user logged in, it's valid for 48h.
- The JWT token is validated in all request that relies on the database.

## Models

### User

```ts
_id: ID;
color: String;
name: String;
userName: String;
email: String;
following: [String];
followers: [String];
```

### Tweet

```ts
_id: ID;
authorId: String;
name: String;
userName: String;
createdAt: String;
avatarColor: String;
content: String;
commentsCounter: Int;
likedBy: [String];
```

## Deploy

This server was deployed on Heroku.
