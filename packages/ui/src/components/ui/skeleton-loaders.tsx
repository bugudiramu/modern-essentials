import { Skeleton } from "./skeleton";

export function ProductCardSkeleton() {
  return (
    <div className="flex flex-col space-y-3 p-4 rounded-xl border border-border/40">
      <Skeleton className="h-[200px] w-full rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
      <div className="flex items-center justify-between pt-2">
        <Skeleton className="h-6 w-[60px]" />
        <Skeleton className="h-9 w-[100px] rounded-full" />
      </div>
    </div>
  );
}

export function TableRowSkeleton() {
  return (
    <div className="flex items-center space-x-4 py-4 px-2 border-b border-border/40">
      <Skeleton className="h-4 w-[100px]" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-[80px]" />
      <Skeleton className="h-8 w-[80px]" />
    </div>
  );
}

export function DashboardStatsSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="p-6 rounded-xl border border-border bg-card">
          <Skeleton className="h-4 w-[100px] mb-4" />
          <Skeleton className="h-8 w-[60px]" />
        </div>
      ))}
    </div>
  );
}
