"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { KpiCard } from "@/components/ui/kpi-card";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EmptyState } from "@/components/ui/empty-state";

function gradeVariant(
  grade?: string
): "success" | "accent" | "warning" | "error" {
  if (grade === "A") return "success";
  if (grade === "B") return "accent";
  if (grade === "C") return "warning";
  return "error";
}

export default function HomeClient({ contractors = [] }: any) {
  const [query, setQuery] = useState("");

  const safe = Array.isArray(contractors) ? contractors : [];

  const filtered = useMemo(() => {
    const q = query.toLowerCase();

    return safe.filter((c: any) =>
      [c.name, c.trade, c.city].some((v) => v?.toLowerCase().includes(q))
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
    <PageContainer>
      <PageHeader
        title="HardHire"
        description="Contractor Safety Intelligence"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <KpiCard
          label="Contractors"
          value={safe.length}
          sublabel="In directory"
        />
        <KpiCard
          label="Avg Score"
          value={avgScore}
          tone={avgScore >= 70 ? "success" : "default"}
        />
      </div>

      <Section title="Directory">
        <div className="mb-4">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search contractors..."
          />
        </div>

        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-[40%]">Contractor</TableHead>
              <TableHead>Trade</TableHead>
              <TableHead>City</TableHead>
              <TableHead className="text-center">Grade</TableHead>
              <TableHead className="text-right">Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length === 0 ? (
              <TableRow className="hover:bg-transparent">
                <TableCell colSpan={5}>
                  <EmptyState
                    title="No contractors found"
                    description="Try adjusting your search terms."
                  />
                </TableCell>
              </TableRow>
            ) : (
              filtered.map((c: any) => (
                <TableRow key={c.id} className="group">
                  <TableCell>
                    <Link
                      href={`/report/${c.slug}`}
                      className="font-medium text-white/90 transition-colors duration-200 ease-out group-hover:text-white"
                    >
                      {c.name}
                    </Link>
                  </TableCell>
                  <TableCell className="text-white/55">{c.trade}</TableCell>
                  <TableCell className="text-white/55">{c.city}</TableCell>
                  <TableCell className="text-center">
                    <Badge variant={gradeVariant(c.grade)}>
                      {c.grade ?? "—"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-medium text-white/80">
                    {c.score ?? 0}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Section>
    </PageContainer>
  );
}
