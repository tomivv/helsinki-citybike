-- CreateTable
CREATE TABLE "Departure_station" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "operator" TEXT NOT NULL,
    "capacity" TEXT NOT NULL,
    "x" TEXT NOT NULL,
    "y" TEXT NOT NULL,

    CONSTRAINT "Departure_station_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Return_station" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "operator" TEXT NOT NULL,
    "capacity" TEXT NOT NULL,
    "x" TEXT NOT NULL,
    "y" TEXT NOT NULL,

    CONSTRAINT "Return_station_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Journeys" (
    "id" TEXT NOT NULL,
    "departure" TIMESTAMPTZ(3) NOT NULL,
    "return" TIMESTAMPTZ(3) NOT NULL,
    "departure_station_id" INTEGER NOT NULL,
    "return_station_id" INTEGER NOT NULL,
    "distance" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,

    CONSTRAINT "Journeys_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Journeys" ADD CONSTRAINT "Journeys_departure_station_id_fkey" FOREIGN KEY ("departure_station_id") REFERENCES "Departure_station"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Journeys" ADD CONSTRAINT "Journeys_return_station_id_fkey" FOREIGN KEY ("return_station_id") REFERENCES "Return_station"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
