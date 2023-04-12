import classNames from "classnames";

import styles from "./Button.module.scss";

const Button = ({
    children,
    className,
    disable,
    type = "primary",
    buttonType = "button",
    iconLeft,
    iconRight,
    onClick,
    ...props
}) => {
    return (
        <button
            disabled={disable}
            onClick={onClick}
            className={classNames(styles.button, styles[type], className)}
            type={buttonType}
            {...props}>
            {iconLeft}
            {children}
            {iconRight}
        </button>
    );
};

export default Button;
