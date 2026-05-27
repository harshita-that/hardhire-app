import { PageContainer } from "@/components/layout/page-container";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { KpiCard } from "@/components/ui/kpi-card";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { ds } from "@/lib/design-system";

export default function Dashboard() {
  return (
    <PageContainer>
      <PageHeader
        title="Dashboard"
        description="Safety overview across all contractors"
      />

      <Section>
        <div className={ds.spacing.gridKpi}>
          <KpiCard label="Total Contractors" value="--" sublabel="All registered" />
          <KpiCard label="Avg Safety Score" value="--" trend="neutral" />
          <KpiCard
            label="High Risk"
            value="--"
            tone="danger"
            trend="down"
            trendLabel="vs last period"
          />
          <KpiCard label="Reports Generated" value="--" sublabel="This month" />
        </div>
      </Section>

      <Section title="System Insight">
        <Card>
          <CardHeader className="mb-0">
            <CardTitle>Analytics</CardTitle>
            <CardDescription>
              Connect analytics layer next to populate real metrics.
            </CardDescription>
          </CardHeader>
        </Card>
      </Section>
    </PageContainer>
  );
}
