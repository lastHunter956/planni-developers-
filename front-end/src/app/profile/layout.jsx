'use client'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Navbar from '@/components/nav/Navbar'
import { usePathname } from 'next/navigation'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'

import { useSession } from 'next-auth/react'

export default function PackagesLayout({ children }) {
  const session = useSession()
  console.log(session)
  const pathname = usePathname()

  return (
    <>
      <header className="h-fit w-full bg-white">
        <Navbar />
      </header>

      {(session?.data?.user?.rolId === 3 ||
        session?.data?.user?.rolId === 1) && (
          <div className="p-5 md:mx-auto md:h-[calc(100dvh_-_130px)] md:max-w-7xl md:py-5">
            <p className="inline-block rounded-3xl bg-[#3e3e3e] px-3 py-1 text-white">
              Usuario
            </p>
            <h2 className="text-xl font-bold md:text-3xl">
              {session?.data?.user?.name}
            </h2>
            <div className="flex flex-col gap-6 md:h-[90%] md:flex-row">
              <div className="flex w-full p-6 md:max-h-[90%] md:w-[50%]">
                <ul className="flex max-md:flex-wrap-reverse max-md:justify-center max-md:gap-4 md:w-full md:flex-col md:gap-3">
                  <li className="flex">
                    <Link
                      href="/profile/user/favoritos"
                      className={`rounded-3xl border-2 border-brand px-7 py-2 text-center text-brand transition-all duration-300 hover:bg-brand-light lg:w-max
                   ${pathname === '/profile/user/favoritos' ? 'rounded-3xl bg-brand px-7 py-2 text-white duration-300 hover:bg-brand-light hover:bg-red-900' : ''}`}
                    >
                      Mis paquetes
                    </Link>
                  </li>
                  <li className="flex">
                    <Link
                      href="/profile/user/datos"
                      className={`rounded-3xl border-2 border-brand px-7 py-2 text-center text-brand transition-all duration-300 hover:bg-brand-light lg:w-max 
                  ${pathname === '/profile/user/datos' ? 'rounded-3xl bg-brand px-7 py-2 text-white duration-300 hover:bg-brand-light hover:bg-red-900' : ''}`}
                    >
                      Ver datos
                    </Link>
                  </li>
                  <li className="flex">
                    <Link
                      href="/profile/user/actualizar"
                      className={`rounded-3xl border-2 border-brand px-7 py-2 text-center text-brand transition-all duration-300 hover:bg-brand-light lg:w-max 
                  ${pathname === '/profile/user/actualizar' ? 'rounded-3xl bg-brand px-7 py-2 text-white duration-300 hover:bg-brand-light hover:bg-red-900' : ''}`}
                    >
                      Actualizar datos
                    </Link>
                  </li>
                </ul>
              </div>
              <ScrollArea className="max-h-[98%] rounded-3xl md:w-[70%]">
                <div className="h-fit rounded-3xl bg-white">{children}</div>
              </ScrollArea>
            </div>
          </div>
        )}

      {session?.data?.user?.rolId === 2 && (
        <div className="p-5 md:mx-auto md:h-[calc(100dvh_-_130px)] md:max-w-7xl md:py-5">
          <p className="inline-block rounded-3xl bg-[#3e3e3e] px-3 py-1 text-white">
            Administrador
          </p>
          <h2 className="text-xl font-bold md:text-3xl">Nombre de usuario</h2>
          <div className="flex flex-col gap-6 md:h-[90%] md:flex-row">
            <div className="flex w-full p-6 md:max-h-[90%] md:w-[25%]">
              <ul className="flex max-md:flex-wrap-reverse max-md:justify-center max-md:gap-4 md:w-full md:flex-col md:gap-3">
                <li className="flex">
                  <Link
                    href="/profile/user/favoritos"
                    className={`rounded-3xl border-2 border-brand px-7 py-2 text-center text-brand transition-all duration-300 hover:bg-brand-light lg:w-max
                   ${pathname === '/profile/user/favoritos' ? 'rounded-3xl bg-brand px-7 py-2 text-white duration-300 hover:bg-brand-light hover:bg-red-900' : ''}`}
                  >
                    Paquetes
                  </Link>
                </li>
                <li className="flex">
                  <Link
                    href="/profile/user/datos"
                    className={`rounded-3xl border-2 border-brand px-7 py-2 text-center text-brand transition-all duration-300 hover:bg-brand-light lg:w-max 
                  ${pathname === '/profile/user/datos' ? 'rounded-3xl bg-brand px-7 py-2 text-white duration-300 hover:bg-brand-light hover:bg-red-900' : ''}`}
                  >
                    Ver datos
                  </Link>
                </li>
                <li className="flex">
                  <Link
                    href="/profile/user/actualizar"
                    className={`rounded-3xl border-2 border-brand px-7 py-2 text-center text-brand transition-all duration-300 hover:bg-brand-light lg:w-max 
                  ${pathname === '/profile/user/actualizar' ? 'rounded-3xl bg-brand px-7 py-2 text-white duration-300 hover:bg-brand-light hover:bg-red-900' : ''}`}
                  >
                    Actualizar datos
                  </Link>
                </li>
              </ul>
            </div>
            <ScrollArea className="max-h-[98%] rounded-3xl md:w-[75%]">
              <div className="h-fit rounded-3xl bg-white">{children}</div>
            </ScrollArea>
          </div>
        </div>
      )}
    </>
  )
}

PackagesLayout.propTypes = {
  children: PropTypes.node
}
