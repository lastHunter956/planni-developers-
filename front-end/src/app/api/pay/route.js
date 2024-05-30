export async function POST(request) {
  const body = await request.json()

  const { userId, packageId } = body

  console.log(body)
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/buys`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id_users: userId,
      id_package: packageId
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
