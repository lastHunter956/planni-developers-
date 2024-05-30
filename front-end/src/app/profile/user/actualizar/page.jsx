'use client'
import { useForm } from '@/hooks/useForm'
import { signIn, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

const Page = () => {
  const { onInputChange } = useForm({
    username: '',
    name_user: '',
    lastname_user: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    id_rol: ''
  })

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  const [username, setUsername] = useState('')
  const [nameUser, setNameUser] = useState('')
  const [lastnameUser, setLastnameUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (session.status === 'loading') {
          sleep(500)
        }
        const res = await fetch(`/api/user/client/${session?.data?.user.email}`)
        const user = await res.json()
        if (!Array.isArray(user.data)) {
          return
        }
        console.log(user)
        setUsername(user.data[0].username || '')
        setNameUser(user.data[0].name_user || '')
        setLastnameUser(user.data[0].lastname_user || '')
        setEmail(user.data[0].email || '')
        setPassword(user.data[0].password || '')
        setPhone(user.data[0].phone || '')
        setAddress(user.data[0].address || '')
        setIdRol(user.data[0].id_rol || '')
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    }

    fetchData()
  }, [])

  const session = useSession()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    const username = formData.get('username')
    const name_user = formData.get('name_user')
    const lastname_user = formData.get('lastname_user')
    const email = formData.get('email') || session?.data?.user?.email
    const password = formData.get('password')
    const phone = formData.get('phone')
    const address = formData.get('address')
    const old_email = session?.data?.user.email

    const bodyConsult = {
      id: session?.data?.user.userId,
      username,
      name_user,
      lastname_user,
      email,
      password,
      phone,
      address,
      id_rol: session?.data?.user.rolId,
      id_country: 1,
      old_email
    }

    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/${session?.data?.user?.userId}`
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyConsult)
    })

    if (!res.ok) {
      alert('Fallo al actualizar los datos')
      return
    }

    alert('Se actualizaron los datos')
    await signIn('credentials', {
      email,
      password,
      redirect: false
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 md:grid md:grid-cols-2 md:p-3"
    >
      <div className="p-4 md:p-3">
        <h2 className="text-xl font-bold">Nombre de usuario</h2>
        <input
          onChange={onInputChange}
          type="text"
          // defaultValue={session?.data?.user.name}
          defaultValue={username}
          placeholder="Rellene este campo"
          name="username"
          className="h-10 w-full border-b-2 border-[#ababab] p-2 outline-none"
        />
      </div>
      <div className="p-4 md:p-3">
        <h2 className="text-xl font-bold">Nombre</h2>
        <input
          onChange={onInputChange}
          type="text"
          name="name_user"
          defaultValue={nameUser}
          placeholder="Rellene este campo"
          className="h-10 w-full border-b-2 border-[#ababab] p-2 outline-none"
        />
      </div>
      <div className="p-4 md:p-3">
        <h2 className="text-xl font-bold">Apellido</h2>
        <input
          onChange={onInputChange}
          type="text"
          name="lastname_user"
          id="Apellido"
          placeholder="Rellene este campo"
          defaultValue={lastnameUser}
          className="h-10 w-full border-b-2 border-[#ababab] p-2 outline-none"
        />
      </div>
      <div className="p-4 md:p-3">
        <h2 className="text-xl font-bold">Correo</h2>
        <input
          onChange={onInputChange}
          type="email"
          name="email"
          id="Correo"
          disabled
          placeholder="Rellene este campo"
          defaultValue={email}
          className="h-10 w-full border-b-2 border-[#ababab] p-2 outline-none"
        />
      </div>
      <div className="p-4 md:p-3">
        <h2 className="text-xl font-bold">Contraseña</h2>
        <input
          onChange={onInputChange}
          type="password"
          name="password"
          id="Contraseña"
          defaultValue={password}
          placeholder="Rellene este campo"
          className="h-10 w-full border-b-2 border-[#ababab] p-2 outline-none"
        />
      </div>
      <div className="p-4 md:p-3">
        <h2 className="text-xl font-bold">Telefono</h2>
        <input
          onChange={onInputChange}
          type="number"
          name="phone"
          id="Telefono"
          defaultValue={phone}
          placeholder="Rellene este campo"
          className="h-10 w-full border-b-2 border-[#ababab] p-2 outline-none"
        />
      </div>
      <div className="col-span-2 p-4 md:p-3">
        <h2 className="text-xl font-bold">Dirección</h2>
        <input
          onChange={onInputChange}
          type="text"
          name="address"
          id="Dirección"
          defaultValue={address}
          placeholder="Rellene este campo"
          className="h-10 w-full border-b-2 border-[#ababab] p-2 outline-none"
        />
      </div>
      <div className="col-span-2 p-4 md:p-3 ">
        <div className=" flex w-full justify-center">
          <button className="rounded-3xl border-2 border-brand px-7 py-2 text-center text-brand transition-all duration-300 hover:bg-brand-light lg:w-max">
            Actualizar
          </button>
        </div>
      </div>
    </form>
  )
}

export default Page
