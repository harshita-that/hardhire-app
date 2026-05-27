import { Badge } from "./badge";

export function RiskBadge({ grade }: { grade?: string }) {
  const label =
    grade === "A"
      ? "Low Risk"
      : grade === "B"
        ? "Moderate Risk"
        : grade === "C"
          ? "Watch"
          : "High Risk";

  const variant =
    grade === "A"
      ? "success"
      : grade === "B"
        ? "accent"
        : grade === "C"
          ? "warning"
          : "error";

  return (
    <Badge variant={variant as "success" | "accent" | "warning" | "error"}>
      {label}
    </Badge>
  );
}
