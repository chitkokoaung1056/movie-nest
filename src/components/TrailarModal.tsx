"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  videoKey: string;
};

export function TrailerModal({
  open,
  onOpenChange,
  videoKey,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        aria-describedby={undefined}
        className="overflow-hidden border-white/10 bg-slate-950 p-0 sm:max-w-4xl"
      >
        <DialogTitle className="sr-only">
          Movie Trailer
        </DialogTitle>

        <div className="aspect-video w-full">
          <iframe
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
            title="Trailer"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}