import localFont from 'next/font/local'
import PropTypes from 'prop-types'
import './globals.css'
import SessionAuthProvider from '@/context/SessionAuthProvider'

const MPLUSRounded = localFont({
  src: [
    {
      path: '../fonts/MPLUSRounded1c-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../fonts/MPLUSRounded1c-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../fonts/MPLUSRounded1c-Bold.woff2',
      weight: '800',
      style: 'normal'
    }
  ]
})

export const metadata = {
  title: 'PLANNI',
  description: 'Creamos los viajes que quieres.'
}

export default function RootLayout({ children }) {
  console.log(MPLUSRounded.className)
  return (
    <html lang="es">
      <SessionAuthProvider>
        <body
          className={
            MPLUSRounded.className + ' ' + 'bg-gray-100 text-[#3e3e3e]'
          }
        >
          {children}
        </body>
      </SessionAuthProvider>
    </html>
  )
}

RootLayout.propTypes = {
  children: PropTypes.node
}
