import classNames from 'classnames';
import { useField } from 'formik';
import { useCallback, useEffect, useRef, useState } from 'react';

import EyeShowIcon from "../../../assets/icons/eye.svg";
import EyeHideIcon from "../../../assets/icons/eye2.svg";

import styles from './InputTextField.module.scss';

const InputTextField = ({
                            iconLeft,
                            iconRight,
                            label,
                            placeholder,
                            disabled,
                            className,
                            type = 'text',
                            onChange,
                            hideErrorMessage,
                            autoFocus,
                            autoComplete = 'on',
                            ...props
                        }) => {
    const [field, meta, helpers] = useField(props)
    const isError = meta.touched && meta.error
    const ref = useRef(null)
    const [isPassword, setIsPassword] = useState(type === 'password')

    const onChangeValue = (evt) => {
        const value = evt.target.value
        helpers?.setValue(value || '')
        onChange && onChange(value)
    }

    const togglePassword = useCallback(() => {
        if (ref.current.type === 'password') {
            ref.current.type = 'text';
            setIsPassword(false);
        }else{
            ref.current.type = 'password';
            setIsPassword(true);
        }
    }, [type]);
    const [wasInitiallyAutofilled, setWasInitiallyAutofilled] = useState(false)

    useEffect(() => {
        autoFocus ? ref.current.focus() : undefined;

        /**
         * The field can be prefilled on the very first page loading by the browser
         * By the security reason browser limits access to the field value from JS level and the value becomes available
         * only after first user interaction with the page
         * So, even if the Formik thinks that the field is not touched by user and empty,
         * it actually can have some value, so we should process this edge case in the form logic
         */
        const checkAutofilled = () => {
            const autofilled = !!ref.current?.matches('*:-webkit-autofill')
            setWasInitiallyAutofilled(autofilled)
        }
        // The time when it's ready is not very stable, so check few times
        setTimeout(checkAutofilled, 500)
        // setTimeout(checkAutofilled, 1000)
        // setTimeout(checkAutofilled, 1500)
    }, [])

    return (
        <div
            className={classNames(
                styles.inputTextField,
                isError && styles.error,
                className,
            )}>
            <div className={styles.inputGroup}>
                {
                    iconLeft &&
                    <span className={styles.iconLeft}>{iconLeft}</span>
                }
                <div>
                    <input
                        ref={ref}
                        {...field}
                        type={type}
                        disabled={disabled}
                        autoComplete={autoComplete}
                        className={classNames({
                            [styles.hasIconLeft]: !!iconLeft,
                            [styles.hasIconRight]: !!iconRight,
                            [styles.isPassword]: type === 'password', 
                            [styles.hasDataInput]: wasInitiallyAutofilled ||  field.value,
                        })}
                        onChange={onChangeValue}
                    />
                    <label className={classNames(styles.label, {
                        [styles.hasData]: wasInitiallyAutofilled || field.value,
                    })}>
                        {placeholder}
                    </label>
                </div>
                {
                    iconRight &&
                    <span className={styles.iconRight}>{iconRight}</span>
                }
                {type === 'password' &&
                    <span className={styles.iconRight}>
                       {isPassword ?
                           <EyeHideIcon onClick={() => togglePassword()}/>
                           :
                           <EyeShowIcon onClick={() => togglePassword()}/>}
                    </span>
                }
            </div>
            {isError &&
                <div className={styles.feedback}>{meta.error}</div>
            }
        </div>
    )
}

export default InputTextField
