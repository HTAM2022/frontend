"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="font-sora text-3xl font-semibold text-ink mb-3">
        Something went wrong
      </h1>
      <p className="text-ink/70 mb-6 max-w-md">
        We hit an unexpected error. You can try again, or head back to the homepage.
      </p>
      <div className="flex gap-3">
        <button
          onClick={reset}
          className="px-5 py-2.5 rounded-md bg-ink text-white font-medium hover:opacity-90 transition"
        >
          Try again
        </button>
        <Link
          href="/"
          className="px-5 py-2.5 rounded-md border border-ink/20 text-ink font-medium hover:bg-ink/5 transition"
        >
          Go home
        </Link>
      </div>
    </div>
  )
}
