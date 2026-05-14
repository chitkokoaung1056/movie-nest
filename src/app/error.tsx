"use client";

import { useEffect } from "react";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-950 text-white">
      <h2 className="text-2xl font-bold">Something went wrong</h2>

      <p className="text-slate-400">{error.message}</p>

      <button
        onClick={() => unstable_retry()}
        className="rounded-xl bg-white px-4 py-2 text-black"
      >
        Try Again
      </button>
    </div>
  );
}
