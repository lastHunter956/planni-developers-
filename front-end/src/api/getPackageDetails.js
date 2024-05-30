export const getPackageDetails = async (packageId) => {
  try {
    if (!packageId)
      return {
        success: false,
        message: 'Falta el packageId',
        data: null
      }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/package/${packageId}`
    )

    if (!res.ok) {
      return {
        success: false,
        message: 'Fallo la petición',
        data: null
      }
    }

    const details = await res.json()

    return {
      success: true,
      message: '',
      data: details.data
    }
  } catch (e) {
    return {
      success: false,
      message: 'Ocurrio un error',
      data: null
    }
  }
}
