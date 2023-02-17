import React from "react";
import classNames from "classnames";

import styles from "./BaseDropdownMenu.module.scss";

const BaseDropdownMenu = ({className, itemClassName, children, textHeader}) => {
    return (
        <div className={classNames(styles.baseDropdownMenuWrapper, className)}>
            {textHeader && <p>{textHeader}</p>}
            <div className={styles.mainMenu}>
                {children}
            </div>
        </div>
    )
}

export default BaseDropdownMenu;