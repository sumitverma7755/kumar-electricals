import { Skeleton } from "@/components/ui/skeleton"

export default function TestimonialsSkeleton() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="flex items-center mb-4">
            <Skeleton className="w-12 h-12 rounded-full mr-4" />
            <div className="flex-1">
              <Skeleton className="h-5 w-24 mb-2" />
              <Skeleton className="h-4 w-16" />
            </div>
          </div>
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      ))}
    </div>
  )
}
