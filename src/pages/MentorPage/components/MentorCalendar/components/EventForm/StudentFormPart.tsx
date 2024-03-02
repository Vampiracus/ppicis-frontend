import React, { useCallback } from 'react';
import { shortName } from '../../../../../../utils/other'
import Form from 'components/Form/Form'
import { validateNumber, validateString } from '../../../../../../utils/validation'

const StudentFormPart: React.FC<{student: TUserInfo, max_grade: number}> = ({ student, max_grade }) => {
    const validateGrade = useCallback((g: string) => validateNumber(g, 'Оценка', { min: 0, max: max_grade }), [ max_grade ])
    const validateComment = useCallback((c: string) => {
        if (c === '') return false
        return validateString(c, 'Комментарий', { minlen: 3, maxlen: 200, regexp: 'elrldfp' })
    }, [])

    return (
        <>
        <h2>{shortName(student)}</h2>
        <Form.CheckInput
            showName='Присутствовал'
            name={student.id + '-' + 'did_attend'}/>
        <Form.InputField 
            showName='Оценка'
            placeholder={`Введите оценку (из ${max_grade}) или оставьте поле пустым...`}
            notRequired
            name={student.id + '-' + 'grade'}
            validationF={validateGrade}/>
        <Form.InputField 
            showName='Комментарий'
            placeholder='Введите комментарий...'
            notRequired
            validationF={validateComment}
            name={student.id + '-' + 'comment'}/>
        </>
    );
};

export default StudentFormPart;