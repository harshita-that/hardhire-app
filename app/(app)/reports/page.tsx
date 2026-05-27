"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Grade = {
  grade?: string;
  score?: number;
};

type Contractor = {
  id: string;
  name: string;
  slug: string;
  grade?: Grade;
};

export default function ReportsPage() {
  const [data, setData] = useState<Contractor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/contractors");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  const stats = useMemo(() => {
    const total = data.length;
    const a = data.filter((c) => c.grade?.grade === "A").length;
    const b = data.filter((c) => c.grade?.grade === "B").length;
    const c = data.filter((c) => c.grade?.grade === "C").length;
    const d = data.filter((c) => c.grade?.grade === "D").length;
    const f = data.filter((c) => c.grade?.grade === "F").length;

    return { total, a, b, c, d, f };
  }, [data]);

  return (
    <div className="p-6 space-y-6">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold">Safety Reports</h1>
        <p className="text-white/60 text-sm mt-1">
          Contractor risk intelligence overview (A–F grading system)
        </p>
      </div>

      {/* KPI GRID */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
        <KPI label="Total" value={stats.total} />
        <KPI label="A Grade" value={stats.a} />
        <KPI label="B Grade" value={stats.b} />
        <KPI label="C Grade" value={stats.c} />
        <KPI label="D Grade" value={stats.d} />
        <KPI label="F Grade" value={stats.f} />
      </div>

      {/* STATES */}
      {loading && (
        <div className="text-white/50 text-sm">
          Loading risk intelligence...
        </div>
      )}

      {!loading && data.length === 0 && (
        <div className="border border-white/10 rounded-xl p-6 text-white/60">
          No contractor data available.
        </div>
      )}

      {/* TABLE */}
      {!loading && data.length > 0 && (
        <div className="border border-white/10 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-white/5 text-white/60">
              <tr>
                <th className="text-left p-3">Contractor</th>
                <th className="text-left p-3">Grade</th>
                <th className="text-left p-3">Score</th>
                <th className="text-left p-3">Risk Level</th>
                <th className="text-left p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {data.map((c) => {
                const grade = c.grade?.grade ?? "N/A";
                const score = c.grade?.score ?? 0;

                const risk =
                  grade === "A"
                    ? "Low"
                    : grade === "B"
                    ? "Low"
                    : grade === "C"
                    ? "Moderate"
                    : grade === "D"
                    ? "High"
                    : grade === "F"
                    ? "Critical"
                    : "Unknown";

                return (
                  <tr
                    key={c.id}
                    className="border-t border-white/10 hover:bg-white/5"
                  >
                    <td className="p-3 font-medium">{c.name}</td>

                    <td className="p-3">
                      <span className="px-2 py-1 rounded bg-white/10 text-xs">
                        {grade}
                      </span>
                    </td>

                    <td className="p-3 text-white/70">
                      {score}
                    </td>

                    <td className="p-3">
                      <span
                        className={`text-xs px-2 py-1 rounded ${
                          risk === "Low"
                            ? "bg-green-500/20 text-green-300"
                            : risk === "Moderate"
                            ? "bg-yellow-500/20 text-yellow-300"
                            : risk === "High"
                            ? "bg-orange-500/20 text-orange-300"
                            : "bg-red-500/20 text-red-300"
                        }`}
                      >
                        {risk}
                      </span>
                    </td>

                    <td className="p-3">
                      <Link
                        href={`/report/${c.slug}`}
                        className="text-blue-400 hover:underline"
                      >
                        View →
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

/* ---------------- KPI Component ---------------- */

function KPI({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="border border-white/10 rounded-lg p-3 bg-white/5">
      <div className="text-xs text-white/50">{label}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  );
}