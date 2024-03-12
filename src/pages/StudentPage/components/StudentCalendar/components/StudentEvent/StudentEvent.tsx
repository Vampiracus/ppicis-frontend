import React, { useCallback, useEffect, useState } from 'react'
import styles from './StudentEvent.module.scss'
import Form from 'components/Form/Form'
import Button from 'components/Button/Button'
import { EventFile, getEventFiles, postEventFile, removeFile } from 'api/files'
import { Link } from 'react-router-dom'
import { fileURL } from 'api/url'
import CrossButton from 'components/CrossButton/CrossButton'

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

    const deleteFile = useCallback(async (id: number) => {
        if (!confirm('Вы уверены, что хотите удалить этот файл?')) return
        const res = await removeFile(id)
        if (res.status === 200) {
            setchanged(changed + 1)
        }
    }, [changed])

    if (!event.team_id) {
        const submitFile: ((formEntries: Record<string, string | File>) => void) = async fe => {
            const fd = new FormData()
            fd.append('file', fe.file)
            await postEventFile(fd, event.id)
            setchanged(changed + 1)
        }
        return (
            <div className={styles.studentGlobalEvent}>
                <h2>{event.name}</h2>
                <p>{event.comment}</p>
                <span>Загруженные файлы:</span>
                <div className={styles.studentGlobalEvent__files}>
                {
                    fileids.map(f => (
                        <div className={styles.studentGlobalEvent__files__item}>
                        <CrossButton title='Удалить этот файл' onClick={() => deleteFile(f.file_id)}/>
                        <Link to={fileURL(f.file_id)} key={f.file_id}>{f.name}</Link>
                        </div>
                    ))
                }
                </div>
                <Form.Form onSubmit={submitFile}>
                    <Form.FileInput />
                    <Button text='Загрузить файл!'/>
                </Form.Form>
            </div>
        )
    }

    return (
        <div>
            123
        </div>
    );
};

export default StudentEvent;