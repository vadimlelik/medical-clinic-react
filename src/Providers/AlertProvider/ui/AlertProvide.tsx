import React, { type ReactNode, useState } from 'react'
import { ALertContext } from '../lib/AlertContext'

interface AlertProviderProps {
  children: ReactNode
}

const AlertProvider = ({ children }: AlertProviderProps) => {
  const [alertName, setAlertName] = useState()

  return <ALertContext.Provider value={{}}>{children}</ALertContext.Provider>
}
export default AlertProvider
