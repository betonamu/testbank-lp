import React, {useEffect, useRef, useState} from "react";

import AvatarIcon from "../../../assets/icons/ic-avt.svg";
import ChevronIcon from "../../../assets/icons/chevron-down.svg";

import styles from "./Select.module.scss";
import classNames from "classnames";

const Select = ({options, defaultValue, onChange, className}) => {
    const [isShow, setIsShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState({...defaultValue});
    const ref = useRef();

    const onSelectedItem = (item) => {
        setSelectedItem(item);
        onChange(item);
    }

    return (
        <div className={classNames(styles.selectWrapper, className)}
             id={'select'}
             onClick={() => setIsShow(!isShow)}>
            <div className={styles.select}>
                <div className={styles.content}>
                    <div className={styles.imgLabel}>
                        {selectedItem.icon}
                    </div>
                    <p className={styles.label}>{selectedItem.label}</p>
                </div>
                <ChevronIcon/>
            </div>

            {isShow && <div className={styles.selectMenu}>
                <p>Bạn là</p>
                {options.map((item, index) => (
                    <div key={index}
                         className={classNames(styles.item, {
                             [styles.active]: item.value === selectedItem.value
                         })}
                         onClick={() => onSelectedItem(item)}>
                        {item.label}
                    </div>
                ))}

            </div>}
        </div>
    )
}

export default Select;