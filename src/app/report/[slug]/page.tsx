import { notFound } from "next/navigation";
import { getContractorBySlug } from "@/lib/hardhire/queries";
import { getGradeByContractorId } from "@/lib/hardhire/grade-queries";
import { getViolationsByContractorId } from "@/lib/hardhire/violation-queries";

import { PageContainer } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { KpiCard } from "@/components/ui/kpi-card";
import { PageHeader } from "@/components/ui/page-header";
import { RiskBadge } from "@/components/ui/risk-badge";
import { Section } from "@/components/ui/section";
import { ds } from "@/lib/design-system";

export default async function ReportPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const contractor = await getContractorBySlug(slug);
  if (!contractor) return notFound();

  const grade = await getGradeByContractorId(contractor.id);
  const violations = await getViolationsByContractorId(contractor.id);

  const serious = violations.filter(
    (v: any) => v.severity === "Serious"
  );

  const other = violations.filter(
    (v: any) => v.severity !== "Serious"
  );

  const allViolations = [...serious, ...other];

  return (
    <PageContainer>
      <PageHeader
        title={contractor.name}
        description="Safety Intelligence Report"
        action={<RiskBadge grade={grade?.grade} />}
      />

      <div className={ds.spacing.gridKpi}>
        <KpiCard label="Score" value={grade?.score ?? 0} />
        <KpiCard label="Grade" value={grade?.grade ?? "N/A"} />
        <KpiCard label="Violations" value={violations.length} />
        <KpiCard
          label="Serious"
          value={serious.length}
          tone="danger"
          trend={serious.length > 0 ? "up" : "neutral"}
        />
      </div>

      <Section title="Risk Analysis">
        <Card>
          <CardContent className="space-y-3 text-sm text-white/60">
            <p>
              {serious.length > 0
                ? "Elevated risk detected due to serious violations."
                : "No critical risk detected."}
            </p>
            <p>
              {violations.length > 5
                ? "Above baseline violation activity."
                : "Normal activity levels."}
            </p>
            <p>
              Classification:{" "}
              <span className="font-medium text-white/85">
                {grade?.grade ?? "Unknown"}
              </span>
            </p>
          </CardContent>
        </Card>
      </Section>

      <Section title="Violations Timeline">
        <Card>
          {allViolations.length === 0 ? (
            <EmptyState
              title="No violations recorded"
              description="This contractor has no violations on file."
            />
          ) : (
            <div className="divide-y divide-white/[0.06]">
              {allViolations.map((v: any) => (
                <div
                  key={v.id}
                  className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
                >
                  <div>
                    <p className="text-sm font-medium text-white/85">
                      {v.violationType}
                    </p>
                    <p className="mt-0.5 text-xs text-white/40">
                      {v.citationDate
                        ? new Date(v.citationDate).toLocaleDateString()
                        : "N/A"}
                    </p>
                  </div>
                  <Badge
                    variant={
                      v.severity === "Serious" ? "error" : "neutral"
                    }
                  >
                    {v.severity}
                  </Badge>
                </div>
              ))}
            </div>
          )}
        </Card>
      </Section>

      <p className="font-mono text-xs text-white/25">
        ID: {contractor.id} · Slug: {contractor.slug}
      </p>
    </PageContainer>
  );
}
