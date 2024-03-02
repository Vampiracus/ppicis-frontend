export function shortName(user: { surname: string, first_name: string, second_name?: string | null}): string {
    return user.surname + ' ' + user.first_name[0] + '. ' + (user.second_name ? user.second_name[0] + '.' : '')
}

export const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
export const daysShort = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
