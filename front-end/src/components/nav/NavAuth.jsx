import Link from 'next/link'

export const NavAuth = () => {
  return (
    <div className="flex h-full w-full flex-col gap-2 p-1 lg:flex-row">
      <Link
        href="/register"
        className="w-full rounded-3xl border-2 border-brand px-8 py-2 text-center text-brand 
                  transition-all duration-300 ease-in-out hover:scale-105 hover:bg-brand-light lg:w-max"
      >
        Crear cuenta
      </Link>
      <Link
        href="/login"
        className="w-full rounded-3xl border-2 border-brand bg-brand px-8 py-2 text-center text-white 
                  transition-all duration-300 ease-in-out hover:scale-105 lg:w-max"
      >
        Iniciar sesión
      </Link>
    </div>
  )
}
