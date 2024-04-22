import { create } from 'zustand'
import { User } from '../models/User'

export const useUser = create((set) => ({
  user: null,
  login: (newUser:User) => set({ user: newUser}),
  updateUser: (newUser:User) => set({ user: newUser }),
}))
