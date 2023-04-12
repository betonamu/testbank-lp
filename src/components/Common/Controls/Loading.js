import React from "react";

import styles from "./Loading.module.scss";

export const CircleLoading = ({width = 40, height = 40}) => {
    return (
        <div style={{width, height}} className={styles.circleLoading}/>
    )
}
