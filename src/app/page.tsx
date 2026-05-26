import ContractorSearch from "@/components/ContractorSearch";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-4xl">
          <div className="mb-4 inline-flex rounded-full border px-3 py-1 text-sm">
            HardHire
          </div>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Know the safety record before you hire.
          </h1>

          <p className="mt-6 text-xl text-muted-foreground">
            HardHire converts OSHA safety records into a simple A–F grade so
            homeowners and general contractors can make safer hiring decisions.
          </p>

          <ContractorSearch />

          <p className="mt-3 text-sm text-muted-foreground">
            Try: ABC Roofing, SafeBuild Electric, Elite Construction
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold">
          Reviews show quality. Not safety.
        </h2>

        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          A contractor can have hundreds of positive reviews and still carry a
          history of OSHA violations. Homeowners rarely see that information
          before signing a contract.
        </p>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-10 text-3xl font-bold">How It Works</h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border p-6">
            <div className="mb-3 text-2xl font-bold">1</div>

            <h3 className="font-semibold">Search Contractor</h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Enter a contractor or company name.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <div className="mb-3 text-2xl font-bold">2</div>

            <h3 className="font-semibold">Analyze Safety Records</h3>

            <p className="mt-2 text-sm text-muted-foreground">
              We aggregate OSHA citations and violation history.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <div className="mb-3 text-2xl font-bold">3</div>

            <h3 className="font-semibold">Receive A–F Grade</h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Understand contractor risk in seconds.
            </p>
          </div>
        </div>
      </section>

      {/* Sample Report */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-8 text-3xl font-bold">Sample Safety Report</h2>

        <div className="max-w-md rounded-2xl border p-8">
          <div className="text-sm text-muted-foreground">Contractor</div>

          <div className="mt-1 text-2xl font-bold">
            ABC Roofing Services
          </div>

          <div className="mt-8 text-7xl font-bold">C</div>

          <div className="mt-8 space-y-3 text-sm">
            <div>5 OSHA citations</div>
            <div>2 serious violations</div>
            <div>Bottom 35% of roofing contractors</div>
            <div>Last citation: 8 months ago</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-3xl border p-12 text-center">
          <h2 className="text-4xl font-bold">
            Join the HardHire Waitlist
          </h2>

          <p className="mt-4 text-muted-foreground">
            Be among the first users to access contractor safety intelligence.
          </p>

          <button className="mt-8 rounded-lg bg-black px-6 py-3 text-white">
            Join Waitlist
          </button>
        </div>
      </section>
    </main>
  );
}