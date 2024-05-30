import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const usePackageStore = create(
  persist(
    (set) => ({
      packages: [],
      loading: false,
      setPackages: (packages) => set({ packages }),
      setLoading: (state) => set({ loading: state })
    }),
    {
      name: 'generated_packages'
    }
  )
)
