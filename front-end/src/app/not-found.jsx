import Link from 'next/link'

const NotFound = () => {
  return (
    <section className="relative h-dvh">
      <header className="absolute left-0 top-0 flex h-14 w-full items-center border-2 px-16">
        <h2 className="text-lg font-bold">404 NOT FOUND</h2>
      </header>
      <div className="flex h-full flex-col items-center justify-center gap-8 p-6 md:flex-row">
        <figure className="lg:max-w-[600px]">
          <img
            className="w-full shadow-stone-500 drop-shadow-lg"
            src="/img/scarecrow.png"
            alt="scarrecrow"
          />
        </figure>
        <section className="flex max-w-[500px] flex-col gap-10">
          <h1 className="text-balance text-5xl font-bold md:text-3xl lg:text-6xl">
            Tengo malas noticias para ti
          </h1>
          <p className="text-balance text-lg  lg:text-2xl">
            Es posible que la página que busca haya sido eliminada o no esté
            disponible.
          </p>
          <Link
            href="/"
            className="inline-block w-fit rounded-full bg-brand px-10 py-3 font-bold text-white transition-transform hover:scale-105"
          >
            VOLVER AL INICIO
          </Link>
        </section>
      </div>
    </section>
  )
}

export default NotFound
