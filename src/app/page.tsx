import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex rounded-full border px-3 py-1 text-sm">
            HardHire
          </div>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Know the safety record before you hire.
          </h1>

          <p className="mt-6 text-xl text-muted-foreground">
            HardHire turns public OSHA records into a simple A–F contractor
            safety grade so homeowners can make safer hiring decisions.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-lg bg-black px-6 py-3 text-white">
              Join Waitlist
            </button>

            <button className="rounded-lg border px-6 py-3">
              View Sample Report
            </button>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold">
          Reviews show quality. Not safety.
        </h2>

        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          A contractor can have five-star reviews and still carry a history of
          OSHA violations. Homeowners rarely see that information before signing
          a contract.
        </p>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-10 text-3xl font-bold">How It Works</h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border p-6">
            <h3 className="font-semibold">1. Search Contractor</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Enter a contractor or company name.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="font-semibold">2. Analyze Safety History</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We process OSHA citations and violation records.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="font-semibold">3. Receive Safety Grade</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Get an easy-to-understand A–F score.
            </p>
          </div>
        </div>
      </section>

      {/* Example */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-8 text-3xl font-bold">Example Report</h2>

        <div className="max-w-md rounded-2xl border p-8">
          <div className="text-sm text-muted-foreground">Contractor</div>

          <div className="mt-1 text-2xl font-bold">ABC Roofing</div>

          <div className="mt-6 text-6xl font-bold">C</div>

          <div className="mt-4 space-y-2 text-sm">
            <p>5 OSHA citations</p>
            <p>2 serious violations</p>
            <p>Bottom 35% of roofing contractors</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-3xl border p-12 text-center">
          <h2 className="text-4xl font-bold">Join the HardHire waitlist</h2>

          <p className="mt-4 text-muted-foreground">
            Be first to access contractor safety grades.
          </p>

          <button className="mt-8 rounded-lg bg-black px-6 py-3 text-white">
            Join Waitlist
          </button>
        </div>
      </section>
    </main>
  )
}
