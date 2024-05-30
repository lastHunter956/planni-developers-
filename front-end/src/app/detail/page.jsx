import Container from '@/components/general/Container'

const Page = () => {
  return (
    <Container>
      <div className="flex w-full flex-col items-start gap-12">
        <div className="flex flex-col gap-3">
          <h1 className="w-full text-center text-3xl font-bold sm:text-5xl">
            Hotel 1
          </h1>
          <div className="flex md:h-[540px] md:w-full">
            <img
              className="h-full w-full rounded-xl object-cover max-sm:rounded-lg"
              src="img\destino-cartagena.jpg"
              alt="destino"
            />
          </div>
          <div className="flex w-full flex-col-reverse justify-between gap-3 md:p-4 lg:flex-row ">
            <p className="sm:text-xl lg:w-[60%]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              similique in exercitationem qui eos placeat quae saepe deserunt
              necessitatibus illo officia ex ipsam natus asperiores voluptas at
              perspiciatis, laboriosam dolores? Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Alias similique in exercitationem
              qui eos placeat quae saepe deserunt necessitatibus illo officia ex
              ipsam natus asperiores voluptas at perspiciatis, laboriosam
              dolores? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Alias similique in exercitationem qui eos placeat quae saepe
              deserunt necessitatibus illo officia ex ipsam natus asperiores
              voluptas at perspiciatis, laboriosam dolores?
            </p>
            <div className=" flex w-full items-center justify-center max-lg:rounded-xl max-lg:bg-white lg:w-[40%] lg:justify-end">
              <div className="flex flex-col items-center justify-center gap-3 py-4 lg:rounded-xl lg:bg-white lg:px-16 lg:py-20">
                <p className=" md:text-xl">Total de paquete</p>
                <h2 className="w-full font-bold max-sm:text-2xl sm:text-4xl">
                  $ 1.320.000
                </h2>
                <button className="rounded-3xl bg-brand px-7 py-2 text-white duration-300 hover:bg-brand-light hover:bg-red-900">
                  Reservar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-5 p-3 md:px-4 lg:w-[75%]">
          <div className="flex items-center justify-between gap-3 rounded-xl bg-white p-2 max-lg:flex-col md:p-4 lg:flex-row ">
            <div>
              <p className="font-bold text-neutral-600 md:text-xl">
                Restaurante
              </p>
              <h2 className="text-xl font-bold sm:text-2xl">
                Nombre del restaurante
              </h2>
            </div>
            <h2 className="font-bold max-sm:text-xl sm:text-2xl ">
              $ 1.000.000
            </h2>
          </div>
          <p className="sm:text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
            similique in exercitationem qui eos placeat quae saepe deserunt
            necessitatibus illo officia ex ipsam natus asperiores voluptas at
            perspiciatis, laboriosam dolores? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Alias similique in exercitationem qui
            eos placeat quae saepe deserunt necessitatibus illo officia ex ipsam
            natus asperiores voluptas at perspiciatis, laboriosam dolores?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
            similique in exercitationem qui eos placeat quae saepe deserunt
            necessitatibus illo officia ex ipsam natus asperiores voluptas at
            perspiciatis, laboriosam dolores?
          </p>
        </div>
        <div className="flex flex-col items-center gap-8 p-3 md:p-4">
          <h2 className="w-full rounded-xl bg-white py-3 text-center text-xl font-bold sm:text-3xl md:px-4 md:py-2 lg:w-[70%]">
            Atracciones
          </h2>
          <div className="lg:flex-cols-2 flex flex-col gap-5 lg:flex-row">
            <div className="flex w-full flex-col gap-4 rounded-xl bg-white p-3 md:px-5 md:py-3 lg:w-[50%]">
              <h2 className="text-center text-xl font-bold md:text-2xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing
              </h2>
              <div className="flex md:h-[300px] md:w-full">
                <img
                  className="h-full w-full rounded-xl object-cover max-sm:rounded-lg"
                  src="img\destino-cartagena.jpg"
                  alt="destino"
                />
              </div>
              <h2 className="text-center font-bold max-sm:text-xl sm:text-2xl">
                $ 1.000.000
              </h2>
              <p className="sm:text-xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
                similique in exercitationem qui eos placeat quae saepe deserunt
                necessitatibus illo officia ex ipsam natus asperiores voluptas
                at perspiciatis, laboriosam dolores? Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Alias similique in exercitationem
                qui eos placeat quae saepe deserunt necessitatibus illo officia
                ex ipsam natus asperiores voluptas at perspiciatis, laboriosam
                dolores? Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Alias similique in exercitationem qui eos placeat quae
                saepe deserunt necessitatibus illo officia ex ipsam natus
                asperiores voluptas at perspiciatis, laboriosam dolores?
              </p>
            </div>
            <div className="flex w-full flex-col gap-4 rounded-xl bg-white p-3 md:px-5 md:py-3 lg:w-[50%]">
              <h2 className="text-center text-xl font-bold md:text-2xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing
              </h2>
              <div className="flex md:h-[300px] md:w-full">
                <img
                  className="h-full w-full rounded-xl object-cover max-sm:rounded-lg"
                  src="img\destino-cartagena.jpg"
                  alt="destino"
                />
              </div>
              <h2 className="text-center font-bold max-sm:text-xl sm:text-2xl">
                $ 1.000.000
              </h2>
              <p className="sm:text-xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
                similique in exercitationem qui eos placeat quae saepe deserunt
                necessitatibus illo officia ex ipsam natus asperiores voluptas
                at perspiciatis, laboriosam dolores? Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Alias similique in exercitationem
                qui eos placeat quae saepe deserunt necessitatibus illo officia
                ex ipsam natus asperiores voluptas at perspiciatis, laboriosam
                dolores? Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Alias similique in exercitationem qui eos placeat quae
                saepe deserunt necessitatibus illo officia ex ipsam natus
                asperiores voluptas at perspiciatis, laboriosam dolores?
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Page
