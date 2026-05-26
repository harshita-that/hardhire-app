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
          <p className="text-sm text-muted-foreground">Safety Grade</p>
          <div className="mt-4 text-7xl font-bold">C</div>
          <p className="mt-2">Moderate Risk</p>
        </div>

        <div className="rounded-2xl border p-6">
          <p className="text-sm text-muted-foreground">
            OSHA Citations
          </p>
          <div className="mt-4 text-4xl font-bold">5</div>
        </div>

        <div className="rounded-2xl border p-6">
          <p className="text-sm text-muted-foreground">
            Serious Violations
          </p>
          <div className="mt-4 text-4xl font-bold">2</div>
        </div>

        <div className="rounded-2xl border p-6">
          <p className="text-sm text-muted-foreground">
            Industry Percentile
          </p>
          <div className="mt-4 text-4xl font-bold">35%</div>
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