/* eslint-disable react-hooks/rules-of-hooks */
import React, { PropsWithChildren, useCallback, useState } from 'react'
import styles from './Form.module.scss'

type FormProps = {
    onSubmit?: (formEntries: Record<string, string | File>) => void
    class?: string
}

type InputProps = {
    placeholder?: string
    name: string
    showName?: string
    type?: string
    notRequired?: true
    validationF?: (s: string) => string | false
}

type CheckInputProps = {
    name: string
    showName?: string
}

type SelectFieldProps = {
    placeholder?: string
    name: string
    showName?: string
    options: (string | number)[]
}

// @ts-expect-error they are defined below
const Form: {
    Form: React.FC<PropsWithChildren<FormProps>> 
    InputField: React.FC<InputProps>
    CheckInput: React.FC<CheckInputProps>
    SelectField: React.FC<SelectFieldProps>
    FileInput: React.FC
} = {}


Form.Form = (props) => {
    const onSubmit: React.FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault()
        if (!props.onSubmit) return
        const entries: Record<string, string | File> = {}
        const fd = new FormData(e.target as HTMLFormElement)
        for(const [key, val] of fd.entries()) {
            entries[key] = val
        }
        props.onSubmit(entries)
    }

    return (
        <form className={styles.form + (props.class ? ' ' + props.class : '')} onSubmit={onSubmit}>
            { props.children }
        </form>
    )
}

Form.InputField = (props) => {
    const [error, setError] = useState<string | false>('')

    const onChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(e => {
        if (props.validationF) {
            setError(props.validationF(e.target.value))
        }
    }, [])

    return (
        <div className={styles.form__input__outer}>
            <label htmlFor={'form-' + props.name} className={styles.form__input__label}>
                {props.showName}
            </label>
            <input
                id={'form-' + props.name}
                className={styles.form__input}
                placeholder={props.placeholder}
                name={props.name}
                type={props.type}
                title={props.showName}
                required = {props.notRequired ? false : true}
                onChange={onChange}
            />
            <label htmlFor={'form-' + props.name} className={styles.form__input__label + ' ' + styles.form__input__label_errors}>
                {error}
            </label>
        </div>
    )
}

Form.CheckInput = (props) => {
    return (
        <div className={styles.form__input__outer_checkbox}>
            <input
                id={'form-' + props.name}
                className={styles.form__input}
                name={props.name}
                type={'checkbox'}
                title={props.showName}
            />
            <span>{props.showName}</span>
        </div>
    )
}

Form.SelectField = (props) => {
    return (
        <div className={styles.form__input__outer}>
            <label htmlFor={'form-' + props.name} className={styles.form__input__label}>
                {props.showName}
            </label>
            <select
                id={'form-' + props.name}
                className={styles.form__input + ' ' + styles.form__input_select}
                name={props.name}
                title={props.showName}
            >
                <option disabled>{props.placeholder}</option>
                {props.options.map(option => (
                    <option key={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

Form.FileInput = () => {
    return (
        <input type='file' name='file'/>
    )
}

export default Form as Readonly<typeof Form>;