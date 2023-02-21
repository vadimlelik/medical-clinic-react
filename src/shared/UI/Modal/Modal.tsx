import { type MouseEvent, type ReactNode, useEffect, useRef, useState, useCallback } from 'react'
import styles from './Modal.module.css'
import Portal from '../Portal/Portal'
import { classNames } from '../../lib/classNames/classNames'

interface ModalProps {
  className?: string
  children: ReactNode
  isOpen?: boolean
  onClose?: () => void

}

const Modal = ({ children, className, isOpen, onClose }: ModalProps): JSX.Element => {
  const [isClosing, setIsClosing] = useState(false)

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing
  }

  const timeRef = useRef<ReturnType<typeof setTimeout>>()

  const closeHandler = useCallback(() => {
    if (onClose !== null) {
      setIsClosing(true)
      timeRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, 300)
    }
  }, [onClose])

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler()
    }
  }, [closeHandler])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }
    return () => {
      clearTimeout(timeRef.current)

      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onKeyDown, isOpen])

  const onContentClick = (e: MouseEvent): void => {
    e.stopPropagation()
  }
  return (
      <Portal >
          <div className={classNames(styles.Modal, mods, [className])}>
              <div className={styles.overlay} onClick={closeHandler}>
                  <div className={classNames(styles.content, { [styles.content]: isOpen })}
                      onClick={onContentClick}> {children} </div>
              </div>
          </div>
      </Portal>

  )
}

export default Modal
