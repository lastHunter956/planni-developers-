import Footer from '@/components/footer/Footer'
import Navbar from '@/components/nav/Navbar'
import PropTypes from 'prop-types'

export default function PackagesLayout({ children }) {
  return (
    <>
      <header className="h-fit w-full bg-white">
        <Navbar />
      </header>
      {children}
      <Footer />
    </>
  )
}

PackagesLayout.propTypes = {
  children: PropTypes.node
}
