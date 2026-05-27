import {
  pgTable,
  uuid,
  varchar,
  integer,
  timestamp,
} from "drizzle-orm/pg-core";

export const contractors = pgTable("contractors", {
  id: uuid("id").defaultRandom().primaryKey(),

  name: varchar("name", { length: 255 }).notNull(),

  slug: varchar("slug", { length: 255 })
    .notNull()
    .unique(),

  trade: varchar("trade", { length: 100 }),

  city: varchar("city", { length: 100 }),

  state: varchar("state", { length: 100 }),

  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull(),
});

export const violations = pgTable("violations", {
  id: uuid("id").defaultRandom().primaryKey(),

  contractorId: uuid("contractor_id")
    .notNull(),

  violationType: varchar("violation_type", {
    length: 255,
  }).notNull(),

  severity: varchar("severity", {
    length: 50,
  }).notNull(),

  penaltyAmount: integer("penalty_amount"),

  citationDate: timestamp("citation_date"),

  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull(),
});

export const safetyGrades = pgTable("safety_grades", {
  id: uuid("id").defaultRandom().primaryKey(),

  contractorId: uuid("contractor_id")
    .notNull(),

  grade: varchar("grade", {
    length: 5,
  }).notNull(),

  score: integer("score").notNull(),

  percentile: integer("percentile"),

  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull(),
});