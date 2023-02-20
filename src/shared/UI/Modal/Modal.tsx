import React, {MouseEvent, KeyboardEvent, ReactNode, useEffect, useRef, useState, useCallback} from 'react';
import styles from './Modal.module.css'
import {classNames} from "../../lib/classNames/classNames";


interface ModalProps {
    className?: string,
    children: ReactNode,
    isOpen?: boolean,
    onClose?: () => void
}

const Modal = ({children, className, isOpen, onClose}: ModalProps) => {
    const [isClosing, setIsClosing] = useState(false)


    const mods: Record<string, boolean> = {
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing
    }


    const timeRef = useRef<ReturnType<typeof setTimeout>>()

    const closeHandler = useCallback(() => {
        if (onClose) {
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
            // @ts-ignore
            window.addEventListener('keydown', onKeyDown)
        }
        return () => {
            clearTimeout(timeRef.current)
            // @ts-ignore
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])


    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation()
    }
    return (
        <div className={classNames(styles.Modal, mods, [className])}>
            <div className={styles.overlay} onClick={closeHandler}>
                <div className={classNames(styles.content, {[styles.content]: isOpen})}
                     onClick={onContentClick}> {children} </div>
            </div>
        </div>
    );
};

export default Modal;
