'use client'

import { SessionProvider } from 'next-auth/react'
import PropTypes from 'prop-types'

const SessionAuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>
}

SessionAuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default SessionAuthProvider
