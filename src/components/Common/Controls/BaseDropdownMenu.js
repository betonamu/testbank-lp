import React from "react";
import classNames from "classnames";

import styles from "./BaseDropdownMenu.module.scss";
import {useOutsideClick} from "@/hooks/useOutsideClick";

const BaseDropdownMenu = ({className, itemClassName, children, textHeader, onClickOutside}) => {
    const ref = useOutsideClick(onClickOutside, true);

    return (
        <div className={classNames(styles.baseDropdownMenuWrapper, className)} ref={ref}>
            {textHeader && <p>{textHeader}</p>}
            <div className={styles.mainMenu}>
                {children}
            </div>
        </div>
    )
}

export default BaseDropdownMenu;