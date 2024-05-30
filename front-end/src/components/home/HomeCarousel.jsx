import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import PropTypes from 'prop-types'

import Link from 'next/link'

const HomeCarousel = ({ cards }) => {
  return (
    <Carousel
      opts={{
        align: 'start'
      }}
      className="m-auto h-fit w-[80%]  2xl:w-full"
    >
      <CarouselContent>
        {cards.map(({ hotel, attractions, totalCost, id }) => (
          <CarouselItem
            key={id}
            className="aspect-[9/13] max-h-96 max-w-96 py-2 transition-transform hover:scale-105 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <Link href={`/packages/${id}`}>
              <div className="h-full cursor-pointer rounded-lg shadow-md">
                <Card className="h-full overflow-hidden bg-white p-0">
                  <CardContent className="flex h-full flex-col p-0">
                    <figure className="relative h-[100%] w-full select-none">
                      <img
                        loading="lazy"
                        src={hotel?.imageUrl}
                        alt="img"
                        className="h-[100%] w-full object-cover"
                      />
                    </figure>
                    <article className="flex h-fit w-full flex-col justify-between gap-1 p-2">
                      <div>
                        <h2 className="font-bold text-gray-700">
                          Hotel: {hotel?.name ?? '1'}
                        </h2>
                        <p className="text-xs font-bold text-gray-400">
                          {attractions?.name ?? 'Cartagena de indias'}
                        </p>
                      </div>
                      <p className="text-right text-sm font-bold">
                        {new Intl.NumberFormat('es-CO', {
                          style: 'currency',
                          currency: 'COP'
                        }).format(Number(totalCost)) ?? '$ 1.899.999'}
                      </p>
                    </article>
                  </CardContent>
                </Card>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

HomeCarousel.propTypes = {
  cards: PropTypes.array.isRequired
}

export default HomeCarousel
