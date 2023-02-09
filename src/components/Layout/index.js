import React from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

import styles from "./Layout.module.scss";

const MasterLayout = ({children}) => {
    return (
        <main className={styles.masterLayout}>
            <Header/>
            <div className={styles.content}>
                {children}
            </div>
            <Footer/>
        </main>
    )
}

export default MasterLayout;