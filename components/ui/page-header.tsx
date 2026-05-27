import { ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";

export function PageHeader({
  title,
  description,
  action,
  className,
}: {
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-8 flex items-start justify-between gap-4",
        className
      )}
    >
      <div>
        <h1 className={ds.text.pageTitle}>{title}</h1>
        {description ? (
          <p className={ds.text.pageDescription}>{description}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
