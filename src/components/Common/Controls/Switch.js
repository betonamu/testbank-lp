import classNames from 'classnames'
import React from 'react'

import styles from './Switch.module.scss'

const Switch = ({
    onChange,
    checked,
    width = 80,
    height = 40,
    className,
    labelLeft = 'VI',
    labelRight = 'EN',
    disabled
}) => {
    return (
        <label className={classNames(styles.switch, className, {
            [styles.disable]: disabled
        })} style={{ width, height }}>
            <input
                id='language-toggle'
                className={styles.toggleRoundFlat}
                onChange={onChange}
                type='checkbox'
                disabled={disabled}
                checked={checked}
            />
            <div className={styles.activeBg} />
            <span className={styles.left}>{labelLeft}</span>
            <span className={styles.right}>{labelRight}</span>
        </label>
    )
}

export default Switch