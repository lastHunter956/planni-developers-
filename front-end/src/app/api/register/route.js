export async function POST(request) {
  const body = await request.json()

  const { email, password, confPassword } = body
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/sign-up/client`

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password,
      password_conf: confPassword,
      id_country: 1
    })
  })

  if (!res.ok) {
    return Response.json({
      success: false,
      message: 'FAllo al registrarse'
    })
  }
  const user = await res.json()

  return Response.json(user)
}
