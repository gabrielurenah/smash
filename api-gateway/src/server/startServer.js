import { ApolloServer } from 'apollo-server-express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';

import { PORT } from '../config/dotenv';

import resolvers from '#root/graphql/resolvers';
import typeDefs from '#root/graphql/typeDefs';
import formatGraphQLErrors from './formatGraphQLErrors';

const apolloServer = new ApolloServer({
  formatError: formatGraphQLErrors,
  resolvers,
  typeDefs,
});

const app = express();

app.use(cookieParser());

app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
  }),
);

apolloServer.applyMiddleware({ app, cors: false, path: '/graphql' });

app.listen(PORT, () =>
  console.log(`API gateway is 🏃‍♀️💨 on http://0.0.0.0:${PORT}`),
);
