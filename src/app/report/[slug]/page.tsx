import { notFound } from "next/navigation";
import { getContractorBySlug } from "@/lib/hardhire/queries";
import { getGradeByContractorId } from "@/lib/hardhire/grade-queries";
import { getViolationsByContractorId } from "@/lib/hardhire/violation-queries";

export default async function ReportPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const contractor = await getContractorBySlug(slug);

  if (!contractor) {
    notFound();
  }

  const grade = await getGradeByContractorId(
    contractor.id
  );

  const violations =
    await getViolationsByContractorId(
      contractor.id
    );

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-5xl font-bold">
          {contractor.name}
        </h1>

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
            {grade?.grade ?? "N/A"}
          </div>

          <p className="mt-2">
            {grade
              ? grade.score >= 80
                ? "Low Risk"
                : grade.score >= 60
                ? "Moderate Risk"
                : "High Risk"
              : "No Data"}
          </p>
        </div>

        <div className="rounded-2xl border p-6">
          <p className="text-sm text-muted-foreground">
            Trade
          </p>

          <div className="mt-4 text-2xl font-bold">
            {contractor.trade ??
              "Unknown"}
          </div>
        </div>

        <div className="rounded-2xl border p-6">
          <p className="text-sm text-muted-foreground">
            City
          </p>

          <div className="mt-4 text-2xl font-bold">
            {contractor.city ??
              "Unknown"}
          </div>
        </div>

        <div className="rounded-2xl border p-6">
          <p className="text-sm text-muted-foreground">
            Safety Score
          </p>

          <div className="mt-4 text-4xl font-bold">
            {grade?.score ?? 0}
          </div>
        </div>
      </div>

      {/* Safety Insights */}
      <div className="mt-10 rounded-2xl border p-6">
        <h2 className="text-2xl font-semibold">
          Safety Insights
        </h2>

        <ul className="mt-4 space-y-3">
          <li>
            Total Violations:{" "}
            {violations.length}
          </li>

          <li>
            Serious Violations:{" "}
            {
              violations.filter(
                (v) =>
                  v.severity ===
                  "Serious"
              ).length
            }
          </li>

          <li>
            Current Grade:{" "}
            {grade?.grade ?? "N/A"}
          </li>

          <li>
            ✓ Loaded from Neon Database
          </li>
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
              <th className="pb-3">
                Date
              </th>
              <th className="pb-3">
                Violation
              </th>
              <th className="pb-3">
                Severity
              </th>
            </tr>
          </thead>

          <tbody>
            {violations.map(
              (violation) => (
                <tr
                  key={violation.id}
                  className="border-b"
                >
                  <td className="py-4">
                    {violation.citationDate
                      ? new Date(
                          violation.citationDate
                        ).toLocaleDateString()
                      : "N/A"}
                  </td>

                  <td className="py-4">
                    {
                      violation.violationType
                    }
                  </td>

                  <td className="py-4">
                    {
                      violation.severity
                    }
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      {/* Contractor Record */}
      <div className="mt-10 rounded-2xl border p-6">
        <h2 className="mb-4 text-2xl font-semibold">
          Contractor Record
        </h2>

        <div className="space-y-2">
          <p>
            <strong>ID:</strong>{" "}
            {contractor.id}
          </p>

          <p>
            <strong>Slug:</strong>{" "}
            {contractor.slug}
          </p>

          <p>
            <strong>Created:</strong>{" "}
            {contractor.createdAt.toLocaleString()}
          </p>
        </div>
      </div>
    </main>
  );
}