/* eslint-disable no-useless-escape */
type ValidationFunction = (word: string) => string | false

export const validateLogin: ValidationFunction = login => {
    if (login.length < 3 || login.length > 20) {
        return 'Не менее 3 и не более 20 символов'
    }
    if (!(/^[A-Za-z0-9]*$/.test(login))) {
        return 'Допустимы только буквы латинского алфавита и цифры'
    }
    return false
}

export const validatePassword: ValidationFunction = password => {
    if (password.length < 8 || password.length > 20) {
        return 'Не менее 8 и не более 20 символов'
    }
    return false
}

export const validateName: ValidationFunction = name => {
    if (name.length > 50) {
        return 'Не должно содержать более 50 символов'
    }
    if (!(/^[A-Za-zА-Яа-яЁё -]*$/.test(name))) {
        return 'Допустимы только буквы кириллицы или латиницы, пробелы или дефисы'
    }
    return false
}

export const validateSocial: ValidationFunction = social => {
    if (social.length > 100) {
        return 'Не должно содержать более 100 символов'
    }
    return false
}

export const validateGroup: ValidationFunction = group => {
    if (group!.length === 0 || group!.length > 50) {
        return 'Не должно быть пустым или содержать более 50 символов'
    }
    if (!(/^[A-Za-zА-Яа-яЁё0-9 \-\'\"\.\,\:\;]*$/.test(group!))) {
        return 'Допустимы только цифры, буквы кириллицы или латиницы или знаки препинания'
    }
    return false
}

export const validateOrganization: ValidationFunction = organization => {
    if (organization!.length === 0 || organization!.length > 100) {
        return 'Не должно быть пустым или содержать более 100 символов'
    }
    if (!(/^[A-Za-zА-Яа-яЁё \-\'\"\.\,\:\;]*$/.test(organization!))) {
        return 'Допустимы только буквы кириллицы или латиницы или знаки препинания'
    }
    return false
}

export const validateThemeName: ValidationFunction = name => {
    if (name.length < 3 || name.length > 100) {
        return 'Название темы не должно содержать меньше 3 или больше 100 символов'
    }
    if (!(/^[A-Za-zА-Яа-яЁё0-9 \-\'\"\.\,\:\;]*$/.test(name!))) {
        // eslint-disable-next-line max-len
        return 'Название темы может содержать только цифры, буквы кириллицы или латиницы или знаки препинания'
    }
    return false
}

export const validateThemeDesctiption: ValidationFunction = description => {
    if (description.length < 3 || description.length > 200) {
        return 'Название темы не должно содержать меньше 3 или больше 200 символов'
    }
    if (!(/^[A-Za-zА-Яа-яЁё0-9 \-\'\"\.\,\:\;]*$/.test(description!))) {
        // eslint-disable-next-line max-len
        return 'Описание темы может содержать только цифры, буквы кириллицы или латиницы или знаки препинания'
    }
    return false
}


export const validateTodoName: ValidationFunction = name => {
    if (name.length < 3 || name.length > 100) {
        return 'Название задачи не должно содержать меньше 3 или больше 100 символов'
    }
    if (!(/^[A-Za-zА-Яа-яЁё0-9 \-\'\"\.\,\:\;]*$/.test(name!))) {
        // eslint-disable-next-line max-len
        return 'Название задачи может содержать только цифры, буквы кириллицы или латиницы или знаки препинания'
    }
    return false
}

export const validateTodoDescription: ValidationFunction = desctiption => {
    if (desctiption.length < 3 || desctiption.length > 500) {
        return 'Описание задачи не должно содержать меньше 3 или больше 500 символов'
    }
    if (!(/^[A-Za-zА-Яа-яЁё0-9 \-\'\"\.\,\:\;]*$/.test(desctiption!))) {
        // eslint-disable-next-line max-len
        return 'Описание задачи может содержать только цифры, буквы кириллицы или латиницы или знаки препинания'
    }
    return false
}

export const validateTodoDeadline: ValidationFunction = deadline => {
    const d = Number( new Date(deadline)), sevenMonth = 1000 * 60 * 60 * 24 * 30 * 7
    if (!(d < Date.now() + sevenMonth)) {
        return 'Слишком большая дата'
    }
    if (!(d > Date.now() - sevenMonth)) {
        return 'Слишком старая дата'
    }
    return false
}
