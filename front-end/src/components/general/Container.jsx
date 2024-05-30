import PropTypes from 'prop-types'
const Container = ({ children }) => {
  return (
    <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 p-8">
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node
}

export default Container
