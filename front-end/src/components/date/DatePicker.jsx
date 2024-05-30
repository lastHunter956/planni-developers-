'use client'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { addDays, format } from 'date-fns'
import { useState } from 'react'
import { es } from 'date-fns/locale'
const DatePicker = () => {
  const [date, setDate] = useState({
    from: new Date(),
    to: addDays(new Date(), 3)
  })

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="ghost"
            className="w-full rounded-none p-0 text-left"
          >
            {date?.from ? (
              date.to ? (
                <span className="w-full text-left">
                  {format(date.from, 'MM/dd/y')} - {format(date.to, 'MM/dd/y')}
                </span>
              ) : (
                format(date.from, 'MM/dd/yyyy')
              )
            ) : (
              <span>Inicio - Fin</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            locale={es}
          />
        </PopoverContent>
      </Popover>
    </>
  )
}

export default DatePicker
