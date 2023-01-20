import { createTRPCRouter } from "./trpc";
import { stationsRouter } from "./routers/stations";
import { journeysRouter } from "./routers/journeys";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  stations: stationsRouter,
  journeys: journeysRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
