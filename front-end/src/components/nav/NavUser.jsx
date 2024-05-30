import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { signOut } from 'next-auth/react'

export const NavUser = () => {
  const router = useRouter()
  return (
    <>
      <div className="mb-4 flex h-full w-full flex-col gap-2 p-1 lg:hidden lg:flex-row">
        <Link
          href="/profile/user/datos"
          className="w-full rounded-3xl border-2 border-brand px-8 py-2 text-center text-brand 
                  transition-all duration-300 ease-in-out hover:scale-105 hover:bg-brand-light lg:w-max"
        >
          Perfil
        </Link>
        <Link
          href="/profile/user/favoritos"
          className="w-full rounded-3xl border-2 border-brand px-8 py-2 text-center text-brand 
                  transition-all duration-300 ease-in-out hover:scale-105 hover:bg-brand-light lg:w-max"
        >
          Mis paquetes
        </Link>
        <Dialog>
          <DialogTrigger>
            <button
              className="w-full rounded-3xl border-2 border-brand bg-brand px-8 py-2 text-center text-white 
                  transition-all duration-300 ease-in-out hover:scale-105 lg:w-max"
            >
              Cerrar sesión
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>¿Deseas cerrar sesión?</DialogTitle>
              <DialogDescription>
                Al cerrar sesión, serás desconectado de tu cuenta y necesitarás
                volver a ingresar tus credenciales para acceder nuevamente.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <button
                onClick={() => {
                  signOut()
                  router.push('/')
                }}
                className="mt-2 w-full rounded-3xl border-2 border-brand bg-brand px-8 py-2 text-center 
                  font-bold text-white transition-all duration-300 ease-in-out hover:scale-105 lg:w-max"
              >
                Confirmar
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="hidden lg:block">
        <DropdownMenu>
          <DropdownMenuTrigger className="ring-none rounded-full">
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/85009282?v=4" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => router.push('/profile/user/datos')}
            >
              <Link href="/profile/user/datos">Pefil</Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => router.push('/profile/user/favoritos')}
            >
              <Link href={'/profile/user/favoritos'}>Mis paquetes</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button
                onClick={() => signOut()}
                className="mt-2 w-full rounded-3xl border-2 border-brand bg-brand px-8 py-2 text-center 
                  font-bold text-white transition-all duration-300 ease-in-out hover:scale-105 lg:w-max"
              >
                Cerrar sesión
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  )
}
