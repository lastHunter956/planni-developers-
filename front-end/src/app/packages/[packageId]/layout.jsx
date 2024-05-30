import PropTypes from 'prop-types'

export default function PackagesLayout({ children }) {
  return <>{children}</>
}

PackagesLayout.propTypes = {
  children: PropTypes.node
}
