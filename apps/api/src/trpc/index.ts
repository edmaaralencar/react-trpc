import { initTRPC } from '@trpc/server'

import { Context } from './context'

const t = initTRPC.context<Context>().create()

export const router = t.router
export const publicProcedure = t.procedure

// export const protectedProcedure = t.procedure.use(
//   async function isAuthed(opts) {
//     const { ctx } = opts

//     if (!ctx.userId) {
//       throw new TRPCError({ code: 'UNAUTHORIZED' })
//     }

//     return opts.next({
//       ctx: {
//         userId: ctx.userId,
//       },
//     })
//   },
// )
