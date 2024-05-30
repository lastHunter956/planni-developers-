export const login = async ({ email, password }) => {
  try {
    console.log('entro')
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/sign-in`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      signal: AbortSignal.timeout(15000)
    })

    if (!res.ok) {
      throw new Error('Algo salio mal.')
    }

    const data = await res.json()

    return data
  } catch (e) {
    console.log(e)
    return {
      success: false,
      data: e.message
    }
  }
}
