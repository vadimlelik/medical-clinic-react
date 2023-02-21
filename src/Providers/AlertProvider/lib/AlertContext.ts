import { createContext } from 'react'

export interface AlertContextProps {
  alert?: string
  closeAlert?: () => void
  setAlertName?: () => void

}

export const ALertContext = createContext<AlertContextProps>({})
