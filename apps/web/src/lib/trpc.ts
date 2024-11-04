import type { AppRouter } from '@boilerplate/api'
import { createTRPCReact } from '@trpc/react-query'

export const trpc = createTRPCReact<AppRouter>()
