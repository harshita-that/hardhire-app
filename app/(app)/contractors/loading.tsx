export default function Loading() {
  return (
    <div className="p-6 space-y-3">
      <div className="h-6 w-40 bg-white/10 rounded animate-pulse" />

      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="h-14 w-full bg-white/5 border border-white/10 rounded-lg animate-pulse"
        />
      ))}
    </div>
  );
}