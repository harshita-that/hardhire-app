import { ArrowDown, ArrowUp, Minus } from "lucide-react";

import { ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";
import { Card } from "./card";

export function KpiCard({
  label,
  value,
  tone = "default",
  trend,
  trendLabel,
  sublabel,
}: {
  label: string;
  value: string | number;
  tone?: "default" | "danger" | "success";
  trend?: "up" | "down" | "neutral";
  trendLabel?: string;
  sublabel?: string;
}) {
  const valueColor =
    tone === "danger"
      ? "text-[#EF4444]"
      : tone === "success"
        ? "text-[#22C55E]"
        : "text-white";

  const TrendIcon =
    trend === "up" ? ArrowUp : trend === "down" ? ArrowDown : Minus;

  const trendColor =
    trend === "up"
      ? "text-[#22C55E]"
      : trend === "down"
        ? "text-[#EF4444]"
        : "text-white/40";

  return (
    <Card className="p-5">
      <p className={cn(ds.text.caption, "mb-2 uppercase tracking-wider")}>
        {label}
      </p>
      <div className="flex items-end justify-between gap-2">
        <p className={cn("text-2xl font-semibold tracking-tight", valueColor)}>
          {value}
        </p>
        {trend ? (
          <div
            className={cn(
              "flex items-center gap-0.5 text-xs font-medium",
              trendColor
            )}
          >
            <TrendIcon className="size-3.5" />
            {trendLabel ? (
              <span className="text-white/40">{trendLabel}</span>
            ) : null}
          </div>
        ) : null}
      </div>
      {sublabel ? (
        <p className={cn(ds.text.caption, "mt-2")}>{sublabel}</p>
      ) : null}
    </Card>
  );
}
