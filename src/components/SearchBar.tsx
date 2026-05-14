"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [value, setValue] = useState(searchParams.get("searchQuery") || "");

  const updateUrl = useDebouncedCallback((val: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (val) {
      params.set("searchQuery", val);
      params.set("page", "1");
    } else {
      params.delete("searchQuery");
    }

    router.push(`?${params.toString()}`);
  }, 1000);

  const handleChange = (val: string) => {
    setValue(val);
    updateUrl(val);
  };

  return (
    <div className="flex h-14 w-full items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 backdrop-blur-xl">
      {/* input */}
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

        <Input
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Search movies..."
          className="h-10 border-0 bg-transparent pl-10 text-white placeholder:text-slate-400 focus-visible:ring-0"
        />
      </div>
    </div>
  );
}
