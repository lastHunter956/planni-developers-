'use client'

import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

const Page = () => {
  const [packages, setPackages] = useState([])
  const session = useSession()

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (session.status === 'loading') {
          await sleep(500)
        }

        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/history/${session?.data?.user?.userId}`
        console.log(url)
        const res = await fetch(url)
        const packs = await res.json()

        setPackages(packs)
        console.log(packs)
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    }

    fetchData()
  }, [])

  console.log(packages)

  return (
    <div className="flex flex-col gap-4 p-4 md:grid md:grid-cols-2">
      {packages.map((pack) => (
        <div className="flex w-full flex-col gap-4 rounded-xl bg-white drop-shadow md:p-4">
          <h2 className="text-center text-xl font-bold">{pack?.name_hotels}</h2>
          <div className="flex md:h-[200px] md:w-full">
            <img
              className="h-full w-full rounded-xl object-cover max-sm:rounded-lg"
              src={pack?.hotel_image}
              alt="destino"
            />
          </div>
          <p className="font-bold">Atracciones: </p>
          <p>{pack?.attraction1_name}</p>
          <p>{pack?.attraction2_name}</p>
          <p className="font-bold">Restaurante: </p>
          <p>{pack?.name_restaurant}</p>
          <h2 className="text-center font-bold max-sm:text-xl sm:text-2xl">
            {new Intl.NumberFormat('es-CO', {
              style: 'currency',
              currency: 'COP'
            }).format(pack?.price_package)}
          </h2>
        </div>
      ))}
    </div>
  )
}

export default Page
