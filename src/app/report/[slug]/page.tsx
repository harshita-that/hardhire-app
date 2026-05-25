export default async function ReportPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <div className="rounded-2xl border p-8">
        <p className="text-sm text-muted-foreground">
          Contractor Report
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          {slug.replaceAll("-", " ")}
        </h1>

        <div className="mt-8 text-7xl font-bold">
          C
        </div>

        <div className="mt-8 space-y-3">
          <p>5 OSHA citations</p>
          <p>2 serious violations</p>
          <p>Bottom 35% of contractors</p>
        </div>
      </div>
    </main>
  );
}