import { violations } from "@/lib/hardhire/schema";

type Violation = typeof violations.$inferSelect;

export function calculateScore(
  violations: Violation[]
) {
  let score = 100;

  for (const v of violations) {
    if (v.severity === "Serious") {
      score -= 20;
    } else {
      score -= 5;
    }
  }

  return Math.max(0, score);
}

export function getGrade(score: number) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}