"use client";

import Image, { ImageProps } from "next/image";
import { Film } from "lucide-react";
import { useState } from "react";

type Props = ImageProps;

export function FallbackImage({ src, alt, className, ...props }: Props) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center bg-slate-900">
        {/* glow */}
        <div className="absolute inset-0 bg-linear-to-b from-slate-800/40 to-slate-950" />

        {/* icon */}
        <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <Film className="h-8 w-8 text-slate-400" />
        </div>

        {/* text */}
        <p className="relative z-10 mt-3 text-xs font-medium text-slate-500">
          No Image
        </p>
      </div>
    );
  }

  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
}
