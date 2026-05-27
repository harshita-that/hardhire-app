"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
      <Input
        value={contractor}
        onChange={(e) => setContractor(e.target.value)}
        placeholder="Search contractor name..."
        className="flex-1"
      />

      <Button
        onClick={handleSearch}
        variant="default"
      >
        Check Safety Grade
      </Button>
    </div>
  );
}