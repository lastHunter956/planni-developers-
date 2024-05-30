'use client'

import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'

const Page = () => {
  const session = useSession()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  console.log(session)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.target)

    const email = formData.get('email')
    const password = formData.get('password')

    if (email.length <= 1 || password <= 1) {
      setError(true)
      setLoading(false)

      return
    }

    const nextAuth = await signIn('credentials', {
      email,
      password,
      redirect: false
    })

    if (nextAuth.error) {
      setError(true)
      setLoading(false)
      return
    }

    router.push('/packages')
  }

  return (
    <div className="mx-auto max-w-7xl ">
      <div className="flex h-screen flex-col items-center justify-center gap-5 md:flex-row md:gap-12">
        <Link href="/">
          <img
            src="logo.svg"
            alt="logo"
            className="m-4 h-[210px] drop-shadow-lg md:h-[300px] lg:h-[400px] xl:h-[500px]"
          />
        </Link>
        <div className="flex h-full w-full justify-center rounded-t-3xl bg-white md:w-auto md:rounded-none">
          <form
            onSubmit={handleSubmit}
            className="flex w-[80%] flex-col items-center justify-center gap-7 p-4 md:w-[90%]"
          >
            <h2 className="w-fit justify-center text-3xl font-extrabold text-brand">
              Inicio de sesión
            </h2>

            <div className="flex w-full flex-col gap-2">
              <p className="inline px-1 font-bold">Correo electronico</p>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Example@gmail.com"
                className={`w-full rounded-lg bg-[#f1f1f1] px-2 py-1 outline-none ${error ? 'outline-red-400' : ''}`}
              />
            </div>

            <div className="flex w-full flex-col gap-2">
              <p className="inline px-1 font-bold">Contraseña</p>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="*****"
                className={`w-full rounded-lg bg-[#f1f1f1] px-2 py-1 outline-none  ${error ? 'outline-red-400' : ''}`}
              />
            </div>
            {/* <button className=" rounded-lg bg-[#D9D9D9] px-6 py-1 font-extrabold hover:bg-neutral-400 "> */}
            {/*   Continua con Google */}
            {/* </button> */}
            <p>
              ¿Todavía no tienes cuenta? -{' '}
              <Link href="/register" className="text-brand hover:underline">
                Registrate
              </Link>
            </p>
            <button
              disabled={loading}
              type="submit"
              className="rounded-lg bg-brand px-6 py-1 font-extrabold text-white hover:bg-red-800 disabled:brightness-95"
            >
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Page
