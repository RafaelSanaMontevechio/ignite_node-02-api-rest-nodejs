import fastify from 'fastify';
import cookie from '@fastify/cookie';

import { transactionsRoutes } from './routes/transactions';

export const app = fastify();

app.register(cookie);

//global hook
app.addHook('preHandler', async (request, _replay) => {
  console.log(`[${request.method}]: ${request.url}`);
});

app.register(transactionsRoutes, {
  prefix: 'transactions',
});
