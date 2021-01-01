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
_id: string;
name: string
userName: string,
email: string
password: string,
friends: string[],
```

### Tweet

```ts
_id: string;
authorId: string;
createdAt: new Date;
name: string;
userName: string;
content: string;
likedBy: string[];
```

## Deploy

This server was deployed on Heroku.
