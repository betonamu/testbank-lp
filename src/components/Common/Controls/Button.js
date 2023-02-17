import React from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

const Button = ({
                    children,
                    className,
                    disable,
                    type = "primary",
                    icon,
                    clicked,
                    ...props
                }) => {
    return (
        <button disabled={disable}
                className={classNames(styles.button, styles[type], className)}
                {...props}>
            {icon}
            {children}
        </button>
    )
}

export default Button;