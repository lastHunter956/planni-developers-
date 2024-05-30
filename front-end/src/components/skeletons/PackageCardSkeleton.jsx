export const PackageCardSkeleton = () => {
  return (
    <article className="relative h-fit w-full overflow-hidden rounded-xl bg-white">
      <div className="aspect-[12/10] w-full animate-pulse bg-slate-200" />
      <div className="flex h-fit w-full flex-col justify-between gap-2 p-2">
        <div>
          <div className="h-6 w-[60%] animate-pulse rounded-full bg-slate-200"></div>
        </div>
        <div className="flex items-center justify-between">
          <p className="h-4 w-[30%] animate-pulse rounded-xl bg-slate-300" />
        </div>
        <div className="flex items-center justify-between">
          <div className="h-8 w-1/3 animate-pulse rounded-2xl bg-slate-300" />
        </div>
      </div>
    </article>
  )
}
