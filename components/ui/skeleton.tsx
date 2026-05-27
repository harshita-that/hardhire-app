import { ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(ds.skeleton.base, "animate-skeleton", className)}
      aria-hidden
      {...props}
    />
  );
}

function TextSkeleton({
  className,
  lines = 1,
}: {
  className?: string;
  lines?: number;
}) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn(
            ds.skeleton.line,
            i === lines - 1 && lines > 1 ? "w-2/3" : "w-full"
          )}
        />
      ))}
    </div>
  );
}

function CardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn(ds.skeleton.block, "p-6", className)}>
      <Skeleton className={cn(ds.skeleton.lineSm, "mb-3 w-24")} />
      <Skeleton className={cn(ds.skeleton.line, "mb-2 w-16")} />
      <Skeleton className={cn(ds.skeleton.lineSm, "w-32")} />
    </div>
  );
}

function TableRowSkeleton({ columns = 5 }: { columns?: number }) {
  return (
    <tr className="border-b border-white/[0.05]">
      {Array.from({ length: columns }).map((_, i) => (
        <td key={i} className="px-4 py-4">
          <Skeleton
            className={cn(
              ds.skeleton.lineSm,
              i === 0 ? "w-32" : "w-16"
            )}
          />
        </td>
      ))}
    </tr>
  );
}

function DashboardSkeleton() {
  return (
    <div className={ds.spacing.page}>
      <div className="mb-8 space-y-2">
        <Skeleton className={cn(ds.skeleton.line, "w-40")} />
        <Skeleton className={cn(ds.skeleton.lineSm, "w-64")} />
      </div>
      <div className={ds.spacing.gridKpi}>
        {Array.from({ length: 4 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
      <CardSkeleton className="mt-8" />
    </div>
  );
}

function TableSkeleton({ rows = 5, columns = 5 }: { rows?: number; columns?: number }) {
  return (
    <div className={ds.table.container}>
      <table className="w-full text-sm">
        <thead className={ds.table.head}>
          <tr>
            {Array.from({ length: columns }).map((_, i) => (
              <th key={i} className={ds.table.headCell}>
                <Skeleton className={cn(ds.skeleton.lineSm, "w-16")} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={ds.table.divide}>
          {Array.from({ length: rows }).map((_, i) => (
            <TableRowSkeleton key={i} columns={columns} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export {
  Skeleton,
  TextSkeleton,
  CardSkeleton,
  TableRowSkeleton,
  DashboardSkeleton,
  TableSkeleton,
};
