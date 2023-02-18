import React from "react";
import {Form, useFormikContext} from "formik";

const BaseForm = ({className, children}) => {
    const formikBag = useFormikContext();

    return (
        <Form className={className} onSubmit={formikBag.handleSubmit}>
            {children}
        </Form>
    );
}

export default BaseForm;