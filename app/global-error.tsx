"use client"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body style={{ fontFamily: "system-ui, sans-serif" }}>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "1.75rem", fontWeight: 600, marginBottom: "0.75rem" }}>
            Something went wrong
          </h1>
          <p style={{ color: "#555", marginBottom: "1.5rem", maxWidth: 480 }}>
            A critical error occurred. Please try again.
          </p>
          <button
            onClick={reset}
            style={{
              padding: "0.625rem 1.25rem",
              borderRadius: 6,
              background: "#111",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontWeight: 500,
            }}
          >
            Try again
          </button>
          {error?.digest && (
            <p style={{ marginTop: "1rem", color: "#888", fontSize: "0.75rem" }}>
              Error ID: {error.digest}
            </p>
          )}
        </div>
      </body>
    </html>
  )
}
