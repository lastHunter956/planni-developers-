'use client'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const Page = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    const email = formData.get('email')
    const password = formData.get('password')
    const confPassword = formData.get('confPassword')

    if (!email || !password || !confPassword) {
      setError(true)
      setIsLoading(false)
      return
    }

    if (password !== confPassword) {
      setError(true)
      setIsLoading(false)
      return
    }

    const res = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        email,
        password,
        confPassword
      })
    })

    if (!res.ok) {
      console.log('error -> !!')
      setError(true)
      setIsLoading(false)
      return
    }

    const user = await res.json()

    if (!user.success) {
      setError(true)
      setIsLoading(false)
      return
    }

    const nextAuth = await signIn('credentials', {
      email,
      password,
      redirect: false
    })

    if (nextAuth.error) {
      setError(true)
      setIsLoading(false)
      return
    }

    router.push('/profile/user/actualizar')
  }
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex h-screen flex-col items-center justify-center gap-5 md:flex-row-reverse md:gap-12">
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
              Crear cuenta
            </h2>
            <div className="w-full">
              <p className="inline px-1 font-bold">Correo electronico</p>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Example@gmail.com"
                className={`w-full rounded-lg bg-[#f1f1f1] px-2 py-1 outline-none ${error ? 'outline-red-400' : ''}`}
              />
            </div>
            <div className="w-full">
              <p className="inline px-1 font-bold">Contraseña</p>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="*****"
                className={`w-full rounded-lg bg-[#f1f1f1] px-2 py-1 outline-none ${error ? 'outline-red-400' : ''}`}
              />
            </div>
            <div className="w-full">
              <p className=" inline px-1 font-bold">Repite la contraseña</p>
              <input
                id="confPassword"
                type="password"
                name="confPassword"
                placeholder="*****"
                className={`w-full rounded-lg bg-[#f1f1f1] px-2 py-1 outline-none ${error ? 'outline-red-400' : ''}`}
              />
            </div>
            {/* <button className="rounded-lg bg-[#D9D9D9] px-6 py-1 font-extrabold hover:bg-neutral-400"> */}
            {/*   Continua con Google */}
            {/* </button> */}
            <p className="text-center">
              ¿Ya tienes cuenta? -{' '}
              <Link href="/login" className="text-brand hover:underline">
                Inicia sesión
              </Link>
            </p>
            <button
              disabled={isLoading}
              type="submit"
              className="rounded-lg bg-brand px-6 py-1 font-extrabold text-white hover:bg-red-800"
            >
              Crear cuenta
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Page
