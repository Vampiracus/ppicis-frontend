/* eslint-disable react-hooks/rules-of-hooks */
import React, { PropsWithChildren } from 'react'
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
}

type CheckInputProps = {
    name: string
    showName?: string
}

type SelectFieldProps = {
    placeholder?: string
    name: string
    showName?: string
    options: string[]
}

// @ts-expect-error they are defined below
const Form: {
    Form: React.FC<PropsWithChildren<FormProps>> 
    InputField: React.FC<InputProps>
    CheckInput: React.FC<CheckInputProps>
    SelectField: React.FC<SelectFieldProps>
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
            />
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

export default Form;