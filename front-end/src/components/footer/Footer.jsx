import React from 'react'
import Container from '../general/Container'

const Footer = () => {
  return (
    <footer className="flex h-fit w-full bg-white ">
      <Container>
        <div className="flex flex-col gap-9 md:flex-row md:justify-around">
          <h2 className="self-center text-4xl font-bold md:text-5xl">PLANNI</h2>
          <div>
            <form>
              <label
                htmlFor="email"
                className="flex flex-col gap-4 max-md:items-center"
              >
                <p>Suscribete para que recibas todas las novedades</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Correo electrónico"
                    className="h-10 w-full border-b-2 border-b-gray-900 p-2 outline-none"
                  />
                  <button
                    type="submit"
                    className="rounded-3xl bg-green-700 px-6 py-1 text-white hover:bg-teal-900 duration-300"
                  >
                    SUSCRIBETE
                  </button>
                </div>
                <div className="flex gap-2 ">
                  <span className="icon-[mdi--facebook-box] h-12 w-12" />
                  <span className="icon-[mdi--instagram] h-12 w-12" />
                  <span className="icon-[mage--x-square] h-12 w-12" />
                </div>
              </label>
            </form>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
