"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContractorSearch() {
  const [contractor, setContractor] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (!contractor.trim()) return;

    const slug = contractor
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-");

    router.push(`/report/${slug}`);
  };

  return (
    <div className="mt-8 flex max-w-xl gap-3">
      <input
        value={contractor}
        onChange={(e) => setContractor(e.target.value)}
        placeholder="Search contractor name..."
        className="flex-1 rounded-lg border px-4 py-3"
      />

      <button
        onClick={handleSearch}
        className="rounded-lg bg-black px-6 py-3 text-white"
      >
        Check Safety Grade
      </button>
    </div>
  );
}