import React from "react";
import classNames from "classnames";


const Container = ({style, className, children}) => {
    return (
        <div className={classNames("container", className)} style={style}>
            {children}
        </div>
    )
}

export default Container;