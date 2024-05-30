'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import DatePicker from '@/components/date/DatePicker'
import { usePackageStore } from '@/store/usePackageStore'
import { usePathname, useRouter } from 'next/navigation'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog'

const FormTrip = () => {
  const setLoading = usePackageStore((state) => state.setLoading)
  const packages = usePackageStore((state) => state.packages)
  const setPackages = usePackageStore((state) => state.setPackages)
  const isLoading = usePackageStore((state) => state.loading)
  const pathname = usePathname()
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    setPackages([])
    console.log('Buscando datos')

    const formData = new FormData(e.target)

    const description = formData.get('description')
    const maxBudget = formData.get('maxBudget')
    const destiny = formData.get('destiny')

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/package`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cityNames: destiny,
        contextUser: description,
        maxBudget
      })
    })

    const packs = await res.json()
    console.log(packs)

    setLoading(false)
    setPackages(packs.data)

    console.log('->', packages)
    router.push('/packages')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative mx-auto mb-32 flex w-full flex-col gap-1 rounded-2xl border-4 border-brand bg-brand md:w-[80%] lg:w-fit lg:flex-row lg:rounded-3xl "
    >
      <div className="flex items-center justify-center gap-3 rounded-t-2xl bg-white px-1 lg:rounded-none lg:rounded-l-3xl">
        <span className="icon-[solar--map-point-bold] h-7 w-7 bg-brand" />
        <label htmlFor="destiny">
          <Select
            defaultValue="Cartagena"
            name="destiny"
            className="select-none border-0 border-none outline-none"
          >
            <SelectTrigger className="w-full rounded-none border-transparent px-0 font-bold outline-none selection:outline-none">
              <SelectValue placeholder="Destino" />
            </SelectTrigger>
            <SelectContent className="font-bold outline-none">
              <SelectItem value="Cartagena" className="font-bold">
                Cartagena
              </SelectItem>
            </SelectContent>
          </Select>
        </label>
      </div>
      <div className="flex items-center justify-center gap-3 bg-white px-1">
        <span className="icon-[material-symbols--calendar-today] h-7 w-7 bg-brand" />
        <label htmlFor="date_trip">
          <DatePicker />
        </label>
      </div>

      <div className="flex items-center justify-center gap-3 bg-white px-1">
        <span className="icon-[material-symbols--person-2-rounded] h-7 w-7 bg-brand" />
        <label htmlFor="maxBudget">
          <span>$ </span>
          <input
            type="number"
            name="maxBudget"
            max={99_999_999}
            min={2_000_000}
            defaultValue={2_000_000}
            id="maxBudget"
            className="w-28 border-transparent bg-white outline-none focus:outline-none"
          />
          <span className="font-bold">Presupuesto</span>
        </label>
      </div>

      <div className="flex items-center justify-center gap-3 rounded-b-2xl bg-white pl-1 pr-2 lg:rounded-none lg:rounded-r-3xl">
        <span className="icon-[cbi--roomsother] h-7 w-7 bg-brand" />
        <label htmlFor="rooms">
          <span>1 </span>
          <span className="font-bold">Habitaciones</span>
        </label>
      </div>
      <button
        type="submit"
        className="items-center justify-center self-center px-3 font-bold text-white hover:bg-brand-light"
      >
        Buscar
      </button>
      <label htmlFor="description" className="absolute -bottom-32 h-28 w-full">
        <textarea
          type="text"
          name="description"
          id="description"
          placeholder='Ej: "Tengo veinti y tantos años, me gusta la playa, la comida de mar..."'
          className="h-full w-full resize-none rounded-lg border-4 border-brand p-2"
        />
      </label>
      {isLoading && pathname !== '/packages' && (
        <AlertDialog defaultOpen>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-center">
                ¡Estamos creando unos paquetes espectaculares, espera un
                momento!
              </AlertDialogTitle>
              <span className="icon-[line-md--loading-loop] mx-auto size-36 bg-brand"></span>
            </AlertDialogHeader>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </form>
  )
}

export default FormTrip
