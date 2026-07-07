import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <p className="text-sm uppercase tracking-widest text-ink/50 mb-3">404</p>
      <h1 className="font-sora text-3xl font-semibold text-ink mb-3">
        Page not found
      </h1>
      <p className="text-ink/70 mb-6 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-5 py-2.5 rounded-md bg-ink text-white font-medium hover:opacity-90 transition"
      >
        Back to homepage
      </Link>
    </div>
  )
}
