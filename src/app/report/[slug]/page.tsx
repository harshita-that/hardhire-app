import { notFound } from "next/navigation";
import { getContractorBySlug } from "@/lib/hardhire/queries";
import { getGradeByContractorId } from "@/lib/hardhire/grade-queries";
import { getViolationsByContractorId } from "@/lib/hardhire/violation-queries";

export default async function ReportPage({
  params,
}: {
  params: { slug: string };
}) {
  const contractor = await getContractorBySlug(params.slug);

  if (!contractor) return notFound();

  const grade = await getGradeByContractorId(contractor.id);
  const violations = await getViolationsByContractorId(contractor.id);

  const serious = violations.filter(
    (v: any) => v.severity === "Serious"
  );

  const other = violations.filter(
    (v: any) => v.severity !== "Serious"
  );

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-5xl font-bold">
          {contractor.name}
        </h1>

        <p className="text-muted-foreground mt-2">
          Contractor Safety Intelligence Report
        </p>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid gap-4 md:grid-cols-4 mb-10">
        <div className="rounded-2xl border p-5">
          <p className="text-sm text-muted-foreground">
            Safety Grade
          </p>
          <p className="text-4xl font-bold">
            {grade?.grade ?? "N/A"}
          </p>
        </div>

        <div className="rounded-2xl border p-5">
          <p className="text-sm text-muted-foreground">
            Safety Score
          </p>
          <p className="text-4xl font-bold">
            {grade?.score ?? 0}
          </p>
        </div>

        <div className="rounded-2xl border p-5">
          <p className="text-sm text-muted-foreground">
            Total Violations
          </p>
          <p className="text-4xl font-bold">
            {violations.length}
          </p>
        </div>

        <div className="rounded-2xl border p-5">
          <p className="text-sm text-muted-foreground">
            Serious Violations
          </p>
          <p className="text-4xl font-bold text-red-500">
            {serious.length}
          </p>
        </div>
      </div>

      {/* INSIGHTS */}
      <div className="rounded-2xl border p-6 mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Safety Insights
        </h2>

        <ul className="space-y-2 text-sm">
          <li>
            • {serious.length > 0
              ? "High-risk patterns detected in serious violations"
              : "No serious violations detected"}
          </li>

          <li>
            • {violations.length > 5
              ? "Above-average violation count"
              : "Violation count within expected range"}
          </li>

          <li>
            • Grade classification: {grade?.grade ?? "Unknown"}
          </li>

          <li>• Data sourced from Neon DB</li>
        </ul>
      </div>

      {/* VIOLATIONS TABLE */}
      <div className="rounded-2xl border p-6">
        <h2 className="text-2xl font-semibold mb-6">
          Recent Violations
        </h2>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-3">Type</th>
              <th className="py-3">Severity</th>
              <th className="py-3">Date</th>
            </tr>
          </thead>

          <tbody>
            {[...serious, ...other].map((v: any) => (
              <tr key={v.id} className="border-b">
                <td className="py-3">{v.violationType}</td>
                <td
                  className={`py-3 ${
                    v.severity === "Serious"
                      ? "text-red-500"
                      : "text-gray-500"
                  }`}
                >
                  {v.severity}
                </td>
                <td className="py-3">
                  {v.citationDate
                    ? new Date(v.citationDate).toLocaleDateString()
                    : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* METADATA */}
      <div className="mt-10 text-sm text-muted-foreground">
        Contractor ID: {contractor.id} <br />
        Slug: {contractor.slug} <br />
        Created:{" "}
        {new Date(contractor.createdAt).toLocaleString()}
      </div>
    </main>
  );
}