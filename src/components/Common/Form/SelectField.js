import React, {useEffect, useState} from 'react'
import {useField} from 'formik'
import classNames from 'classnames'

import {useOutsideClick} from '../../../hooks/useOutsideClick'

import ChevronIcon from '../../../assets/icons/chevron-down.svg'

import styles from './SelectField.module.scss'

const SelectField = ({
                         name,
                         className,
                         menuClassName,
                         onChange,
                         options,
                         titleDropdown,
                         placeHolder,
                         ...rest
                     }) => {
    const [field, meta, helpers] = useField(name)
    const isError = meta.error && meta.touched;
    const [isShow, setIsShow] = useState(false)
    const ref = useOutsideClick(() => setIsShow(false), true, false)

    const selectedItem = options.find(item => item.value === field.value)
    
    const onChangeValue = (item) => {
        helpers.setValue(item?.value || '')

        onChange?.(item)
    }

    return (
        <div className={classNames(styles.selectFieldWrapper, className, {
            [styles.error]: isError,
            
        })}
             onClick={() => setIsShow(!isShow)} ref={ref}>
            <div className={classNames(styles.select, {
                [styles.hasData]: selectedItem?.value
            })}>
                <div className={styles.content}>
                    <div className={styles.imgLabel}>
                        {selectedItem?.icon}
                    </div>
                    <input className={styles.label} placeholder={placeHolder} {...field} value={selectedItem?.label || ''}/>
                </div>
                <ChevronIcon/>
            </div>
            {isError && (
                <div className={styles.feedback}>{meta.error}</div>
            )}
            {isShow && <div className={classNames(styles.selectMenu, menuClassName)}>
                {titleDropdown && <p>{titleDropdown}</p>}
                {options.map((item, index) => (
                    <div key={index}
                         className={classNames(styles.item, {
                             [styles.active]: item.value === selectedItem?.value,
                         })}
                         onClick={() => onChangeValue(item)}>
                        {item.label}
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default SelectField