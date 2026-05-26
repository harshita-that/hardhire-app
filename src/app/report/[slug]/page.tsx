import { contractors } from "@/lib/mock-data";

export default async function ReportPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const contractorName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const report =
    contractors[slug as keyof typeof contractors] ?? {
      grade: "N/A",
      risk: "No Data Available",
      citations: 0,
      seriousViolations: 0,
      percentile: 0,
    };

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-5xl font-bold">{contractorName}</h1>

        <p className="mt-2 text-muted-foreground">
          Contractor Safety Intelligence Report
        </p>
      </div>

      {/* Score Cards */}
      <div className="grid gap-6 md:grid-cols-4">
        <div className="rounded-2xl border p-6">
          <p className="text-sm text-muted-foreground">
            Safety Grade
          </p>

          <div className="mt-4 text-7xl font-bold">
            {report.grade}
          </div>

          <p className="mt-2">{report.risk}</p>
        </div>

        <div className="rounded-2xl border p-6">
          <p className="text-sm text-muted-foreground">
            OSHA Citations
          </p>

          <div className="mt-4 text-4xl font-bold">
            {report.citations}
          </div>
        </div>

        <div className="rounded-2xl border p-6">
          <p className="text-sm text-muted-foreground">
            Serious Violations
          </p>

          <div className="mt-4 text-4xl font-bold">
            {report.seriousViolations}
          </div>
        </div>

        <div className="rounded-2xl border p-6">
          <p className="text-sm text-muted-foreground">
            Industry Percentile
          </p>

          <div className="mt-4 text-4xl font-bold">
            {report.percentile}%
          </div>
        </div>
      </div>

      {/* Safety Insights */}
      <div className="mt-10 rounded-2xl border p-6">
        <h2 className="text-2xl font-semibold">
          Safety Insights
        </h2>

        <ul className="mt-4 space-y-3">
          <li>⚠ Multiple fall protection violations identified</li>
          <li>⚠ Repeated ladder safety citations</li>
          <li>⚠ Higher citation rate than industry average</li>
          <li>✓ No willful violations found</li>
        </ul>
      </div>

      {/* Citation History */}
      <div className="mt-10 rounded-2xl border p-6">
        <h2 className="mb-6 text-2xl font-semibold">
          Recent Citation History
        </h2>

        <table className="w-full">
          <thead>
            <tr className="border-b text-left">
              <th className="pb-3">Date</th>
              <th className="pb-3">Violation</th>
              <th className="pb-3">Severity</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="py-4">2025-07</td>
              <td>Fall Protection</td>
              <td>Serious</td>
            </tr>

            <tr className="border-b">
              <td className="py-4">2025-01</td>
              <td>Ladder Safety</td>
              <td>Serious</td>
            </tr>

            <tr className="border-b">
              <td className="py-4">2024-08</td>
              <td>PPE Compliance</td>
              <td>Other</td>
            </tr>

            <tr>
              <td className="py-4">2024-03</td>
              <td>Training Documentation</td>
              <td>Other</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}