"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export default function HomeClient({ contractors = [] }: any) {
  const [query, setQuery] = useState("");

  const safe = Array.isArray(contractors) ? contractors : [];

  const filtered = useMemo(() => {
    const q = query.toLowerCase();

    return safe.filter((c: any) =>
      [c.name, c.trade, c.city].some((v) =>
        v?.toLowerCase().includes(q)
      )
    );
  }, [safe, query]);

  const avgScore =
    safe.length > 0
      ? Math.round(
          safe.reduce((a: number, b: any) => a + (b.score ?? 0), 0) /
            safe.length
        )
      : 0;

  return (
    <main className="max-w-6xl mx-auto px-6 py-14">

      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-4xl font-semibold tracking-tight">
          HardHire
        </h1>

        <p className="text-sm text-zinc-500 mt-1">
          Contractor Safety Intelligence
        </p>
      </div>

      {/* TOP METRICS (minimal strip) */}
      <div className="flex gap-10 text-sm text-zinc-600 mb-8">
        <div>
          <span className="text-zinc-900 font-medium">
            {safe.length}
          </span>{" "}
          contractors
        </div>

        <div>
          avg score{" "}
          <span className="text-zinc-900 font-medium">
            {avgScore}
          </span>
        </div>
      </div>

      {/* SEARCH */}
      <div className="mb-6">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search contractors..."
          className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
        />
      </div>

      {/* TABLE (YC STYLE CORE UI) */}
      <div className="border border-zinc-200 rounded-2xl overflow-hidden">

        {/* HEADER ROW */}
        <div className="grid grid-cols-12 text-xs uppercase tracking-wide text-zinc-500 bg-zinc-50 px-5 py-3">
          <div className="col-span-5">Contractor</div>
          <div className="col-span-2">Trade</div>
          <div className="col-span-2">City</div>
          <div className="col-span-1 text-center">Grade</div>
          <div className="col-span-2 text-right">Score</div>
        </div>

        {/* ROWS */}
        <div className="divide-y divide-zinc-100">
          {filtered.map((c: any) => (
            <Link
              key={c.id}
              href={`/report/${c.slug}`}
              className="grid grid-cols-12 px-5 py-4 hover:bg-zinc-50 transition"
            >
              <div className="col-span-5 font-medium">
                {c.name}
              </div>

              <div className="col-span-2 text-sm text-zinc-600">
                {c.trade}
              </div>

              <div className="col-span-2 text-sm text-zinc-600">
                {c.city}
              </div>

              <div className="col-span-1 text-center">
                <span
                  className={`
                    text-xs px-2 py-1 rounded-md font-medium
                    ${
                      c.grade === "A"
                        ? "bg-green-100 text-green-700"
                        : c.grade === "B"
                        ? "bg-lime-100 text-lime-700"
                        : c.grade === "C"
                        ? "bg-yellow-100 text-yellow-700"
                        : c.grade === "D"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-red-100 text-red-700"
                    }
                  `}
                >
                  {c.grade ?? "—"}
                </span>
              </div>

              <div className="col-span-2 text-right text-sm text-zinc-900 font-medium">
                {c.score ?? 0}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}