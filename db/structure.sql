CREATE TABLE "Aircraft" (
  "aircraftId" bigint generated always as identity,
  "code" varchar NOT NULL,
  "model" varchar NOT NULL,
  "range" integer NOT NULL
);

ALTER TABLE "Aircraft" ADD CONSTRAINT "pkAircraft" PRIMARY KEY ("aircraftId");
