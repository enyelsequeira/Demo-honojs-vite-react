import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import env from '../../server/src/env';
import * as schema from './schema';

export const client = () =>
  createClient({
    url: env.DATABASE_URL,
    authToken: env.DATABASE_AUTH_TOKEN,
  });

export const db = drizzle(client(), { schema });
