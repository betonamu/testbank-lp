import classNames from "classnames";
import { useRef, useState } from "react";

import ChevronIcon from "@assets/icons/chevron-down.svg";

import styles from "./Select.module.scss";

const Select = ({options, defaultValue, onChange, className, disable}) => {
    const [isShow, setIsShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState({...defaultValue});
    const ref = useRef();

    const onSelectedItem = (item) => {
        setSelectedItem(item);
        onChange(item);
    }

    return (
        <div className={classNames(styles.selectWrapper, className, {
            [styles.disable]: disable
        })}
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
                        {t(item.label)}
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default Select;