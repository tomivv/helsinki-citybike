import { createTRPCRouter } from "./trpc";
import { stationsRouter } from "./routers/stations";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  stations: stationsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
