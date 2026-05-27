import { PageContainer } from "@/components/layout/page-container";
import { CardSkeleton } from "@/components/ui/skeleton";
import { ds } from "@/lib/design-system";

export default function ReportLoading() {
  return (
    <PageContainer>
      <div className="mb-8 space-y-2">
        <div className="h-7 w-48 animate-pulse rounded-md bg-white/[0.06]" />
        <div className="h-4 w-64 animate-pulse rounded-md bg-white/[0.04]" />
      </div>
      <div className={ds.spacing.gridKpi}>
        {Array.from({ length: 4 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
      <CardSkeleton className="mt-8" />
      <CardSkeleton className="mt-4" />
    </PageContainer>
  );
}
