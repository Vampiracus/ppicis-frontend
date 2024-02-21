/* eslint-disable react-hooks/rules-of-hooks */
import React, { FormEventHandler, PropsWithChildren } from 'react'
import styles from './Form.module.scss'

type FormProps = {
    onSubmit?: FormEventHandler<HTMLFormElement>
}

type InputProps = {
    placeholder?: string
    name: string
    showName?: string
}

// @ts-expect-error they are defined below
const Form: {
    Form: React.FC<PropsWithChildren<FormProps>> 
    InputField: React.FC<InputProps>
} = {}


Form.Form = ({ children, onSubmit }) => {
    return (
        <form className={styles.form} onSubmit={onSubmit}>
            { children }
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
            />
        </div>
    )
}

export default Form;