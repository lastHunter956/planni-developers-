import { getPackageDetails } from '@/api/getPackageDetails'
import { ConfirmationDialog } from '@/components/pay/ConfirmationDialog'
import { redirect } from 'next/navigation'

const getDetails = async (packId) => {
  const pack = await getPackageDetails(packId)

  if (!pack.success) return
  return pack
}

const Page = async ({ params }) => {
  const res = await getDetails(params.packageId)
  // if (!res?.success) redirect('/not-found')

  const { hotel, restaurant, attractions, totalCost } = res.data

  return (
    <section className="container mx-auto min-h-[calc(100dvh_-_298px)] py-8">
      <h1 className="mb-4 text-2xl font-bold">Reservar paquete</h1>
      <div className="flex min-h-[58dvh] w-full flex-col gap-4 lg:flex-row">
        <div className="flex h-fit w-full flex-col overflow-hidden rounded-lg border bg-white md:flex-row">
          <figure className="w-full lg:w-1/3">
            <img
              className="aspect-[12/10] w-full object-cover md:h-full"
              src={hotel.imageUrl}
              alt="img hotel"
            />
          </figure>
          <div className="w-full">
            <h2 className="mt-4 text-center font-bold">Paquete</h2>
            <div className="flex flex-col gap-2 p-4">
              <h3>
                <span className="font-bold">Hotel: </span>
                {hotel.name}
              </h3>
              <h3>
                <span className="font-bold">Restaurante: </span>
                {restaurant.name}
              </h3>
              <div>
                <h3 className="font-bold">Atracciones:</h3>
                <ol className="pl-4">
                  {attractions.map((attraction) => (
                    <li>
                      <h3>{attraction.name}</h3>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <form className="border-gray-30 flex min-w-max flex-col content-between gap-4 rounded-lg border bg-white p-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold">Metodo de pago</h2>
            <div className="flex items-center justify-between gap-4 rounded-lg border border-red-600 bg-red-100 p-6">
              <img className="h-8" src="/visa_logo.png" alt="ms logo" />
              <span>**** **** **** 4838</span>
            </div>
          </div>
          <div className="flex h-full flex-col gap-4">
            <p className="flex justify-between">
              Subtotal{' '}
              <span className="font-bold">
                {new Intl.NumberFormat('es-CO', {
                  style: 'currency',
                  currency: 'COP'
                }).format(totalCost)}
              </span>
            </p>
            <p className="flex justify-between">
              Comisión <span className="font-bold">$ 0</span>
            </p>

            <div className="mt-auto flex flex-col gap-4">
              <hr />
              <p className="flex justify-between">
                Total{' '}
                <span className="font-bold">
                  {new Intl.NumberFormat('es-CO', {
                    style: 'currency',
                    currency: 'COP'
                  }).format(totalCost)}
                </span>
              </p>
              <ConfirmationDialog />
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Page
