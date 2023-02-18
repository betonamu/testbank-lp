import React from 'react';
import { useField } from 'formik';
import classNames from 'classnames';

import styles from './TextAreaField.module.scss';

const TextAreaField = ({
    iconLeft,
    iconRight,
    label,
    placeholder,
    disabled,
    className,
    type = 'text',
    onChange,
    hideErrorMessage,
    maxLength,
    showCountCharacter,
    textareaStyle,
    ...props
}) => {
    const [ field, meta, helpers ] = useField(props);
    const isError = meta.touched && meta.error

    const onChangeValue = (evt) => {
        const value = evt.target.value;
        helpers.setValue(value || '');
        onChange && onChange(value);
    }

    return (
        <div
            className={classNames(
                styles.inputTextField,
                isError && styles.error,
                className,
                showCountCharacter && styles.countCharacter
            )}
        >
            {label && (
                <label>
                    {label}
                    {props.required && <span>*</span>}
                </label>
            )}
            <div className={styles.inputGroup}>
                {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
                <textarea
                    {...field}
                    {...props}
                    placeholder={placeholder}
                    disabled={disabled}
                    className={classNames({
                        [className]: !!className,
                        [styles.hasIconLeft]: !!iconLeft,
                        [styles.hasIconRight]: !!iconRight
                    })}
                    maxLength={maxLength}
                    onChange={onChangeValue}
                    style={textareaStyle}
                >
                </textarea>
                {showCountCharacter && <div className={styles.count}>{`${field.value.length}/${maxLength}`}</div>}
                {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
            </div>
            {isError && !hideErrorMessage && (
                 <div className={styles.feedback}>{meta.error}</div>
            )}
        </div>
    );
};

export default TextAreaField;
