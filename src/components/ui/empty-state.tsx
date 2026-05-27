import { ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";

export function EmptyState({
  title = "No data yet",
  description,
  message,
  icon,
  action,
  className,
}: {
  title?: string;
  description?: string;
  /** @deprecated Use title + description */
  message?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}) {
  const displayTitle = message ?? title;

  return (
    <div className={cn(ds.empty.wrapper, className)}>
      {icon ? (
        <div className="mb-4 flex size-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-white/30">
          {icon}
        </div>
      ) : null}
      <p className={ds.empty.title}>{displayTitle}</p>
      {description ? (
        <p className={ds.empty.description}>{description}</p>
      ) : null}
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}
