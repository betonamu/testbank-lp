import React from "react";
import {useField} from "formik";
import classNames from "classnames";

import {numberRegex} from "../../../interfaces/constants";

import ChevronIcon from "assets/icons/chevron-down.svg";

import styles from "./InputNumberField.module.scss";

const InputNumberField = ({name, unit, onChange, min = 0, max, className}) => {
    const [field, meta, helpers] = useField(name)
    const isError = meta.error && meta.touched;

    const onChangeValue = (e) => {
        const {value} = e.target;
        if (parseInt(value) < min) {
            helpers.setValue(min);
            return;
        }

        if (parseInt(value) > max) {
            helpers.setValue(max);
            return;
        }

        if (value && !numberRegex.test(value)) return;
        helpers.setValue(value || '');

        onChange?.(value)
    }

    const onChangeValueClick = (type = 'plus') => {
        let nextValue = field.value || '0';
        if (type === 'plus') {
            nextValue = parseInt(nextValue) + 1;
        } else {
            nextValue = parseInt(nextValue) - 1;
        }

        if (nextValue < min || nextValue > max) return;

        helpers.setValue(nextValue);
    }

    return (
        <div className={classNames(styles.inputNumberFieldWrapper, className, {
            [styles.error]: isError
        })}>
            <div className={styles.fieldGroup}>
                <div className={styles.inputGroup}>
                    <input {...field} type={"text"} onChange={onChangeValue} autoComplete={name}/>
                    <div>
                        <span onClick={() => onChangeValueClick()}><ChevronIcon/></span>
                        <span onClick={() => onChangeValueClick('minus')}><ChevronIcon/></span>
                    </div>
                </div>
                <span className={styles.unit}>{unit}</span>
            </div>

            {isError &&
                <div className={styles.feedback}>{meta.error}</div>
            }
        </div>
    )
}

export default InputNumberField;