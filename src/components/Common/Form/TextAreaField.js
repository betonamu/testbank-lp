import classNames from 'classnames';
import { useField } from 'formik';
import { useState } from 'react';

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
    autoFocus,
    ...props
}) => {
    const [ field, meta, helpers ] = useField(props);
    const isError = meta.touched && meta.error
    const [wasInitiallyAutofilled, setWasInitiallyAutofilled] = useState(false)
    const onChangeValue = (evt) => {
        const value = evt.target.value;
        helpers.setValue(value || '');
        onChange && onChange(value);
    }
    const handleTextareaFocus = () => {
        setWasInitiallyAutofilled(true);
    };
    
    const handleTextareaBlur = () => {
        setWasInitiallyAutofilled(false);
    };
    return (
        <div
            className={classNames(
                styles.inputTextField,
                isError && styles.error,
                className,
            )}>
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
                    disabled={disabled}
                    className={classNames({
                        [className]: !!className,
                        [styles.hasIconLeft]: !!iconLeft,
                        [styles.hasIconRight]: !!iconRight,
                        [styles.hasData]: wasInitiallyAutofilled || field.value,
                    })}
                    maxLength={maxLength}
                    onChange={onChangeValue}
                    style={textareaStyle}
                    onFocus={handleTextareaFocus}
                    onBlur={handleTextareaBlur}
                >
                </textarea>
                <label className={classNames(styles.label, {
                        [styles.hasData]: wasInitiallyAutofilled || field.value,
                })}>
                    {placeholder}
                </label>
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
