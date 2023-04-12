import React from "react";
import classNames from "classnames";
import {useField} from "formik";

import styles from "./RadioField.module.scss";

const RadioField = ({label, className, name, onChange, ...rest}) => {
    const [field, meta, helpers] = useField(name)
    const isError = meta.touched && meta.error

    const onChangeValue = (e) => {
        helpers.setValue(e.target.checked)

        onChange?.()
    }

    return (
        <div className={classNames(styles.radioFieldWrapper, className, {
            [styles.error]: isError
        })}>
            <div className={styles.fieldGroup}>
                <input {...field}
                       type="radio"
                       id={name}
                       name={name} onChange={onChangeValue}/>
                <label htmlFor={name}>{label}</label>
            </div>
            {isError && (
                <div className={styles.feedback}>{meta.error}</div>
            )}
        </div>
    );
}

export default RadioField;