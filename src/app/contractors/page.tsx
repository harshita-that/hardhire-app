import Link from "next/link";
import { db } from "@/lib/db/client";
import { contractors } from "@/lib/hardhire/schema";
import { PageContainer } from "@/components/layout/page-container";
import { StaggerItem, StaggerList } from "@/components/motion/stagger-list";
import { Card } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { ds } from "@/lib/design-system";

export default async function ContractorsPage() {
  const data = await db.select().from(contractors);

  return (
    <PageContainer>
      <PageHeader
        title="Contractors"
        description="All registered contractors"
      />

      <Section>
        {data.length === 0 ? (
          <Card>
            <EmptyState
              title="No contractors yet"
              description="Registered contractors will appear here once added to the system."
            />
          </Card>
        ) : (
          <StaggerList className={ds.spacing.gridList}>
            {data.map((c) => (
              <StaggerItem key={c.id}>
                <Link href={`/report/${c.slug}`}>
                  <Card variant="interactive" className="p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-white/90">
                          {c.name}
                        </p>
                        <p className="mt-0.5 font-mono text-xs text-white/40">
                          {c.slug}
                        </p>
                      </div>
                      <span className="text-xs text-white/40">
                        View Report →
                      </span>
                    </div>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerList>
        )}
      </Section>
    </PageContainer>
  );
}
