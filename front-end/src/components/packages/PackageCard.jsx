'use client'
import Link from 'next/link'

export const PackageCard = ({ details }) => {
  return (
    <article className="relative h-fit w-full overflow-hidden rounded-xl bg-white">
      <img
        // src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/458471254.jpg?k=c53df9a8986d8467d21586bb97b4b9a4cef57ea3f2f06e2f4838d295e9845d33&o=&hp=1"
        src={details?.hotel?.imageUrl}
        alt="img"
        className="aspect-[12/10] w-full object-cover "
      />

      <div className="flex h-fit w-full flex-col justify-between gap-1 p-2">
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            {details.hotel.name}
          </h2>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold text-gray-600">
            {new Intl.NumberFormat('es-CO', {
              style: 'currency',
              currency: 'COP'
            }).format(details.totalCost)}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <Link
            className="rounded-2xl bg-brand px-8 py-1 font-bold text-white"
            href={`/packages/${details.id_package}`}
          >
            Ver más
          </Link>
        </div>
      </div>
    </article>
  )
}
