import { publicProcedure, router } from '@/trpc'

export const userRouter = router({
  list: publicProcedure.query(() => {
    return []
  }),
})
