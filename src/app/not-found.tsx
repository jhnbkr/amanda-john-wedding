import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-light mb-6">Oops!</h1>
        <p className="text-xl text-gray-600 mb-4">Looks like you&apos;ve wandered down the wrong aisle.</p>
        <p className="text-gray-500 mb-8">
          This page didn&apos;t make the guest list — but we know where the party is!
        </p>
        <Link
          href="/"
          className="inline-block mt-4 px-8 py-3 text-sm uppercase tracking-[0.2em] border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
        >
          Back to the Main Event
        </Link>
      </div>
    </div>
  );
}
