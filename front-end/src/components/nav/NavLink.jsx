import Link from 'next/link'
import PropTypes from 'prop-types'
import { usePathname } from 'next/navigation'

const NavLink = ({ href, children }) => {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={`w-full min-w-[150px] rounded-3xl bg-brand-light px-8 py-2 text-center text-brand transition-all 
                duration-300 ease-in-out hover:scale-105 lg:w-fit ${pathname === href ? 'font-bold' : ''}`}
    >
      {children}
    </Link>
  )
}

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

export default NavLink
