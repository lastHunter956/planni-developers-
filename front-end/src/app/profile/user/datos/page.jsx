'use client'
import { useForm } from '@/hooks/useForm'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

const Page = () => {
  const { formState, onInputChange, setFormState } = useForm({
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
  return (
    <div className="flex flex-col gap-4 p-3 md:grid md:grid-cols-2">
      <div className="p-3">
        <h2 className="text-xl font-bold">Nombre de usuario</h2>
        <input
          type="text"
          name="username"
          id="Nombre de usuario"
          readOnly=""
          value={username}
          disabled
          className="h-10 w-full border-b-2 border-[#ababab] p-2 outline-none"
        />
      </div>
      <div className="p-3">
        <h2 className="text-xl font-bold">Nombre</h2>
        <input
          type="text"
          name="name_user"
          id="Nombre"
          readOnly=""
          value={nameUser}
          disabled
          className="h-10 w-full border-b-2 border-[#ababab] p-2 outline-none"
        />
      </div>
      <div className="p-3">
        <h2 className="text-xl font-bold">Apellido</h2>
        <input
          type="text"
          name="lastname_user"
          id="Apellido"
          readOnly=""
          value={lastnameUser}
          disabled
          className="h-10 w-full border-b-2 border-[#ababab] p-2 outline-none"
        />
      </div>
      <div className="p-3">
        <h2 className="text-xl font-bold">Correo</h2>
        <input
          type="email"
          name="email"
          id="Correo"
          readOnly=""
          value={email}
          disabled
          className="h-10 w-full border-b-2 border-[#ababab] p-2 outline-none"
        />
      </div>
      <div className="p-3">
        <h2 className="text-xl font-bold">Contraseña</h2>
        <input
          type="password"
          name="password"
          id="Contraseña"
          readOnly=""
          value={password}
          disabled
          className="h-10 w-full border-b-2 border-[#ababab] p-2 outline-none"
        />
      </div>
      <div className="p-3">
        <h2 className="text-xl font-bold">Telefono</h2>
        <input
          type="number"
          name="phone"
          id="Telefono"
          readOnly=""
          value={phone}
          disabled
          className="h-10 w-full border-b-2 border-[#ababab] p-2 outline-none"
        />
      </div>
      <div className="col-span-2 p-3">
        <h2 className="text-xl font-bold">Dirección</h2>
        <input
          type="text"
          name="adress"
          id="Dirección"
          readOnly=""
          value={address}
          disabled
          className="h-10 w-full border-b-2 border-[#ababab] p-2 outline-none"
        />
      </div>
    </div>
  )
}

export default Page
