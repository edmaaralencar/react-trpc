import { db } from '@boilerplate/db'
import { createId } from '@paralleldrive/cuid2'
import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    generateId: () => createId(),
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },
  trustedOrigins: ['http://localhost:5173'],
})
