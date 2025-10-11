import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-foreground body-background">
      <AnimateOnScroll>
        <div className="flex flex-col items-center space-y-4 p-8 rounded-lg shadow-lg bg-white">
          <h2 className="text-3xl font-bold text-gray-900">404 - Page Not Found</h2>
          <p className="text-gray-700 text-lg text-center">Could not find the requested resource.</p>
          <Link href="/" className="mt-4 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors font-display">
            Return Home
          </Link>
        </div>
      </AnimateOnScroll>
    </div>
  );
}