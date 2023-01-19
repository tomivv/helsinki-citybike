import type { Departure_station } from "@prisma/client";

/**
 * Takes array of Departure_station and filters it with given string
 * @param arr Departure_station array
 * @param filter Search string
 */
export function filterStations(arr: Departure_station[], filter: string) {
  filter = filter.toLowerCase();
  return arr.filter(station => ( station.name.toLowerCase().includes(filter) || station.address.toLowerCase().includes(filter) || station.city.toLowerCase().includes(filter)))
}