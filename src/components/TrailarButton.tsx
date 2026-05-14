"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TrailerModal } from "./TrailarModal";

type Props = {
  videoKey?: string;
};

export function TrailerButton({ videoKey }: Props) {
  const [open, setOpen] = useState(false);

  if (!videoKey) return null;

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="h-12 rounded-2xl bg-white px-6 text-black hover:bg-white/90"
      >
        <Play className="mr-2 h-4 w-4 fill-black" />
        Watch Trailer
      </Button>

      <TrailerModal
        open={open}
        onOpenChange={setOpen}
        videoKey={videoKey}
      />
    </>
  );
}