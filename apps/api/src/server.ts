import * as trpcExpress from '@trpc/server/adapters/express'
import { toNodeHandler } from 'better-auth/node'
import cors from 'cors'
import express from 'express'

import { auth } from './lib/auth'
import { createContext } from './trpc/context'
import { appRouter } from './trpc/router'

const app = express()

app.use(
  cors({
    origin: ['http://localhost:5173'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['POST', 'GET', 'OPTIONS'],
  }),
)

app.all('/api/auth/*', toNodeHandler(auth))

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
)

app.listen(4000, () => {
  console.log(`Example app listening on port ${4000}`)
})
