import Image from "next/image";
import { SearchBar } from "./SearchBar";
import { Card } from "@/components/ui/card";
import { Suspense } from "react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2000&auto=format&fit=crop"
          alt="Movie background"
          fill
          sizes="100vw"
          loading="eager"
          priority
          className="object-cover scale-110"
        />

        <div className="absolute inset-0 bg-slate-950/80" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/60 to-black/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[40vh] md:min-h-[50vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="space-y-6">
          {/* badge */}
          <Card className="inline-flex items-center rounded-full border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-xl">
            🎬 Discover Movies Instantly
          </Card>

          {/* title */}
          <div className="space-y-3">
            <h1 className="text-5xl font-black tracking-tight text-white md:text-7xl">
              MovieNest
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              Discover trending movies, explore new releases, and find what to
              watch next.
            </p>
          </div>

          {/* search */}
          <Suspense fallback={null}>
            <SearchBar />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
