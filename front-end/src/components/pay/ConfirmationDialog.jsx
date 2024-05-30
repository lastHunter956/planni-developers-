'use client'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { AlertDialogFooter, AlertDialogHeader } from '../ui/alert-dialog'

import { useParams, useRouter } from 'next/navigation'

export const ConfirmationDialog = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const { packageId } = useParams()
  const session = useSession()
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms))
    }

    const { user } = session.data

    console.log(user.userId, packageId)

    setIsLoading(true)

    await fetch('/api/pay', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: user.userId,
        packageId: Number(packageId)
      })
    })
    setIsLoading(false)
    setIsCompleted(true)

    await sleep(3000)
    router.push('/')
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger className="w-full rounded-lg bg-brand py-2 text-white">
        Pagar
      </AlertDialogTrigger>
      <AlertDialogContent className="flex flex-col items-center gap-8">
        {!isCompleted && (
          <AlertDialogHeader>
            <AlertDialogTitle>
              ¿Seguro desea realizar la compra?
            </AlertDialogTitle>
          </AlertDialogHeader>
        )}
        <AlertDialogDescription>
          {!isCompleted ? (
            'Al completar la transacción, recibirá un correo electrónico con el recibo de la compra.'
          ) : (
            <span className="mx-auto flex w-max flex-col items-center gap-4 text-[16px]">
              <span className="icon-[material-symbols--check-circle-rounded] size-20 bg-green-400"></span>
              Compra realizada correctamente.
            </span>
          )}
        </AlertDialogDescription>
        <AlertDialogFooter className={'w-full'}>
          <form onSubmit={handleSubmit} className="flex w-full justify-between">
            {!isCompleted && (
              <AlertDialogCancel
                disabled={isLoading || isCompleted}
                className="rounded-full border-2 border-red-500 px-10 py-2 font-bold 
                        text-red-500 transition-transform hover:scale-105 hover:bg-white hover:text-red-500 disabled:opacity-70 disabled:hover:scale-100"
              >
                Cancelar
              </AlertDialogCancel>
            )}
            {!isCompleted && (
              <button
                disabled={isLoading || isCompleted}
                className="rounded-full border-2 border-brand bg-brand px-10 font-bold 
              text-white transition-transform hover:scale-105 disabled:bg-red-700 disabled:hover:scale-100"
              >
                {!isLoading && !isCompleted ? 'Comprar' : 'Procesando...'}
              </button>
            )}
          </form>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
