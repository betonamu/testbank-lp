import React from "react";
import {FormikProvider} from "formik";

import MasterLayout from "@/components/Layout";

import "@/assets/scss/index.scss"

const App = ({Component, pageProps}) => {
    return (
        <MasterLayout>
            <Component {...pageProps} />
        </MasterLayout>
    )
}

export default App;
