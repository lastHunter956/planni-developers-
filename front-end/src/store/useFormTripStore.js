import { create } from 'zustand'

const useFormTripStore = create((set) => ({
  maxBudget: 2000000,
  description: '',
  setMaxBudget: (max) => set(() => ({ maxBudget: max })),
  setDescription: (desc) => set(() => ({ description: desc }))
}))

export { useFormTripStore }
