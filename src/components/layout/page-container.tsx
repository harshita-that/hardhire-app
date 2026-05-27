import { ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";

/**
 * PageContainer — enforces vertical rhythm and spacing scale on every page.
 */
export function PageContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(ds.spacing.page, className)}>{children}</div>
  );
}
