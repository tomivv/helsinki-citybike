import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const journeysRouter = createTRPCRouter({
  getJourneys: publicProcedure
  .input(
    z.object({
      skip: z.number()
    })
  )
  .query(async ({ ctx, input }) => {
    return ctx.prisma.$transaction([
      ctx.prisma.journeys.count(),
      ctx.prisma.journeys.findMany({
        take: 10,
        skip: input.skip,
        include: {
          departure_station: {
            select: {
              name: true
            }
          },
          return_station: {
            select: {
              name: true
            }
          }
        }
      })
    ]);
  })
});
