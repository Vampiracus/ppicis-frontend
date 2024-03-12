import React, { useEffect, useState } from 'react'
import styles from './StudentEvent.module.scss'
import Form from 'components/Form/Form'
import Button from 'components/Button/Button'
import { EventFile, getEventFiles, postEventFile, removeFile } from 'api/files'
import { Link } from 'react-router-dom'
import { fileURL } from 'api/url'
import CrossButton from 'components/CrossButton/CrossButton'
import EventGrades from './EventGrades'

type Props = {
    event: TEvent
}

const StudentEvent: React.FC<Props> = ({ event }) => {
    const [fileids, setfileids] = useState<EventFile[]>([]);
    const [changed, setchanged] = useState(0);

    useEffect(() => {
        (async function() {
            const fileids = await getEventFiles(event.id)
            if (fileids.file_ids) {
                setfileids(fileids.file_ids)
            }
        })()
    }, [event.id, changed])

    const submitFile: ((formEntries: Record<string, string | File>) => void) = async fe => {
        const fd = new FormData()
        fd.append('file', fe.file)
        await postEventFile(fd, event.id)
        setchanged(changed + 1)
    }
    const deleteFile = async (id: number) => {
        if (!confirm('Вы уверены, что хотите удалить этот файл?')) return
        const res = await removeFile(id)
        if (res.status === 200) {
            setchanged(changed + 1)
        }
    }
    return (
        <div className={styles.studentEvent}>
            <h2>{event.name}</h2>
            <p>{event.comment}</p>
            <EventGrades event={event}/>
            <span>Загруженные файлы:</span>
            <div className={styles.studentEvent__files}>
            {
                fileids.map(f => (
                    <div className={styles.studentEvent__files__item}>
                    <CrossButton title='Удалить этот файл' onClick={() => deleteFile(f.file_id)}/>
                    <Link to={fileURL(f.file_id)} key={f.file_id}>{f.name}</Link>
                    </div>
                ))
            }
            </div>
            {
                event.team_id === null
                ? (
                    <Form.Form onSubmit={submitFile}>
                        <Form.FileInput />
                        <Button text='Загрузить файл!'/>
                    </Form.Form>
                )
                : ''
            }
        </div>
    )
};

export default StudentEvent;