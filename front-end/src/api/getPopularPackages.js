export const getPopularPackage = async () => {
  try {
    const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/package`
    console.log('url ->', URL.toString())
    const res = await fetch(URL)

    if (!res.ok) throw new Error('Ocurrio un problema.')

    const data = await res.json()

    console.log('la funcion ->', data)

    return data
  } catch (e) {
    return {
      success: false,
      data: null,
      message: e.message
    }
  }
}
