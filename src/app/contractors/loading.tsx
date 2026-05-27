import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/ui/page-header";
import { CardSkeleton } from "@/components/ui/skeleton";
import { ds } from "@/lib/design-system";

export default function ContractorsLoading() {
  return (
    <PageContainer>
      <PageHeader title="Contractors" description="All registered contractors" />
      <div className={ds.spacing.gridList}>
        {Array.from({ length: 6 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </PageContainer>
  );
}
