import { useSession } from 'next-auth/react'
import { NavAuth } from './NavAuth'
import { NavUser } from './NavUser'

export const NavSession = () => {
  const { status } = useSession()
  return <>{status !== 'authenticated' ? <NavAuth /> : <NavUser />}</>
}
