import { type ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: ReactNode
  element?: HTMLElement
}

const Portal = ({ children, element = document.body }: PortalProps): JSX.Element => {
  return createPortal(children, element)
}

export default Portal
