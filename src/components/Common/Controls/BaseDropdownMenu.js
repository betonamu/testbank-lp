import { useEffect } from 'react'

import classNames from 'classnames'

import { useOutsideClick } from '@/hooks/useOutsideClick'
import useDevices from '../../../hooks/useDevices'

import styles from './BaseDropdownMenu.module.scss'

const BaseDropdownMenu = ({ className, children, textHeader, onClickOutside }) => {
    const ref = useOutsideClick(onClickOutside, true);
    const { isDesktop } = useDevices()

    useEffect(() => {
        if (!isDesktop) {
            document.body.style.overflow = 'hidden'
        }
    
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isDesktop])

    return (
        <div className={classNames(styles.baseDropdownMenuWrapper, className)} ref={ref}>
            {textHeader && <p>{textHeader}</p>}
            <div className={styles.mainMenu}>
                {children}
            </div>
        </div>
    )
}

export default BaseDropdownMenu
