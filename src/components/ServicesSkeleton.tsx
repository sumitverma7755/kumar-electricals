import { Skeleton } from "@/components/ui/skeleton"

export default function ServicesSkeleton() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-white rounded-xl p-8 shadow-sm">
          <Skeleton className="w-16 h-16 rounded-xl mb-4" />
          <Skeleton className="h-6 w-3/4 mb-3" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      ))}
    </div>
  )
}
