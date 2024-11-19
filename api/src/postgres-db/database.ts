import { Pool } from 'pg'
import { Kysely, PostgresDialect } from 'kysely'

import { DatabaseModel } from './types/database-model'

export const poolInstance = new Pool({
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT ? parseInt(process.env.POSTGRES_PORT) : 5432,
})

export const dialectInstance = new PostgresDialect({
  pool: poolInstance,
})

// Database interface is passed to Kysely's constructor, and from now on, Kysely
// knows your database structure.
// Dialect is passed to Kysely's constructor, and from now on, Kysely knows how
// to communicate with your database.
export const db = new Kysely<DatabaseModel>({
  dialect: dialectInstance,
})
