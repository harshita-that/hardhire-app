import { ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";

export function Section({
  title,
  description,
  children,
  className,
}: {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn(ds.spacing.section, className)}>
      {(title || description) && (
        <div className="mb-4">
          {title ? (
            <h2 className={ds.text.sectionTitle}>{title}</h2>
          ) : null}
          {description ? (
            <p className={ds.text.pageDescription}>{description}</p>
          ) : null}
        </div>
      )}
      {children}
    </section>
  );
}
