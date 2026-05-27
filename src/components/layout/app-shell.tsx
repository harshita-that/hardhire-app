import { AppContent } from "@/components/layout/app-content";
import { Sidebar } from "@/components/ui/sidebar";
import { ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";

/**
 * AppShell — enforces layout structure. Do not set page-level backgrounds outside this component.
 */
export function AppShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(ds.layout.shell, className)}>
      <Sidebar />
      <main className={ds.layout.main}>
        <div className={ds.layout.content}>
          <AppContent>{children}</AppContent>
        </div>
      </main>
    </div>
  );
}
