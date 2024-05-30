import Container from '@/components/general/Container'
import Banner from '@/components/general/Banner'
import FormTrip from '@/components/form/FormTrip'
import { PackageContainer } from '@/components/packages/PackageContainer'

export default function Packages() {
  return (
    <Container>
      <Banner reverse src="/img/destino-cartagena.jpg">
        Cartagena
      </Banner>
      <FormTrip />
      <h2 className="flex h-full w-full self-start text-4xl font-bold">
        Paquetes
      </h2>
      <PackageContainer />
    </Container>
  )
}
