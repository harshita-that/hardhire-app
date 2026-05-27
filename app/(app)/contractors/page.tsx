"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Contractor = {
  id: string;
  name: string;
  slug: string;
  grade?: {
    grade: string;
    score: number;
  } | null;
};

export default function ContractorsPage() {
  const [data, setData] = useState<Contractor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/contractors");

        // 🔥 CRITICAL FIX: prevent HTML crash
        const contentType = res.headers.get("content-type");

        if (!res.ok) {
          throw new Error("API request failed");
        }

        if (!contentType?.includes("application/json")) {
          throw new Error("Invalid API response (not JSON)");
        }

        const json = await res.json();
        setData(json);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="p-6 text-white/60">
        Loading contractors...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-red-400">
        {error}
      </div>
    );
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Contractors</h1>

      <div className="grid gap-3">
        {data.map((c) => (
          <Link
            key={c.id}
            href={`/report/${c.slug}`}
            className="p-4 border border-white/10 rounded-lg hover:bg-white/5 transition"
          >
            <div className="flex justify-between">
              <span>{c.name}</span>

              <span className="text-white/60 text-sm">
                {c.grade?.grade ?? "N/A"}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}