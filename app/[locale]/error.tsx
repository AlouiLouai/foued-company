"use client";

import { useEffect } from "react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-foreground">
      <AnimateOnScroll>
        <div className="flex flex-col items-center space-y-4 p-8 rounded-lg shadow-lg bg-white">
          <h2 className="text-3xl font-bold text-red-600">Something went wrong!</h2>
          <p className="text-gray-700 text-lg text-center">We apologize for the inconvenience. Please try again.</p>
          <button
            className="mt-4 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors font-display"
            onClick={() => reset()}
          >
            Try again
          </button>
        </div>
      </AnimateOnScroll>
    </div>
  );
}