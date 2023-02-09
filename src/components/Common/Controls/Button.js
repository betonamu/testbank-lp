import React from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

const Button = ({children, className, disable, type}) => {
    return (
        <button disabled={disable}
                className={classNames(styles.button, styles[type], className)}>
            {children}
        </button>
    )
}

export default Button;