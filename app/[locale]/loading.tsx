"use client";

import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-foreground">
      <AnimateOnScroll>
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-gray-900 rounded-full animate-spin"></div>
          <p className="text-xl font-display">Loading...</p>
        </div>
      </AnimateOnScroll>
    </div>
  );
}
