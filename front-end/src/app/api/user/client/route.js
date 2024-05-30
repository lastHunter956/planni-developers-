export async function PUT(request) {
  const body = await request.json()

  const {
    id,
    username,
    name_user,
    lastname_user,
    email,
    password,
    phone,
    address,
    id_rol
  } = body

  if (!id) {
    return Response.json({
      success: false
    })
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      name_user,
      lastname_user,
      email,
      password,
      phone,
      address,
      id_rol
    })
  })

  if (!res.ok) {
    return Response.json({
      success: false,
      message: 'Fallo al pagar el paquete'
    })
  }

  const buy = await res.json()

  return Response.json(buy)
}
