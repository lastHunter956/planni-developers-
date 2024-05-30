export async function GET(req, context) {
  try {
    const { params } = context

    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/${params.email}`
    const res = await fetch(url)

    if (!res.ok) {
      return {
        success: false,
        message: 'Fail'
      }
    }

    const user = await res.json()

    return Response.json(user)
  } catch {
    return Response.json({
      success: false,
      message: 'Fallo'
    })
  }
}

export async function PUT(request, context) {
  try {
    const { params } = context
    const bodyConsult = await request.json()
    console.log(bodyConsult)

    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/${params.email}`
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    })

    if (!res.ok) {
      return {
        success: false,
        message: 'Fail'
      }
    }

    const user = await res.json()

    return Response.json(user)
  } catch {
    return Response.json({
      success: false,
      message: 'Fallo'
    })
  }
}
