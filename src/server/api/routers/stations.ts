import { createTRPCRouter, publicProcedure } from "../trpc";

export const stationsRouter = createTRPCRouter({
  getStations: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.departure_station.findMany();
  })
});
