import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const stationsRouter = createTRPCRouter({
  getStations: publicProcedure
  .input(
    z.object({
      skip: z.number()
    })
  )
  .query(async ({ ctx, input }) => {
    return ctx.prisma.$transaction([
      ctx.prisma.departure_station.count(),
      ctx.prisma.departure_station.findMany({
        take: 10,
        skip: input.skip,
      }),
    ])
  })
});
