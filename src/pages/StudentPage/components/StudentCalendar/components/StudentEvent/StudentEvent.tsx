import React, { useEffect } from 'react'
import styles from './StudentEvent.module.scss'
import Form from 'components/Form/Form'
import Button from 'components/Button/Button'
import { EventFile, getEventFiles, postEventFile } from 'api/files'
import { Link } from 'react-router-dom'
import { fileURL } from 'api/url'

type Props = {
    event: TEvent
}

const StudentEvent: React.FC<Props> = ({ event }) => {
    const [fileids, setfileids] = React.useState<EventFile[]>([]);

    useEffect(() => {
        (async function() {
            const fileids = await getEventFiles(event.id)
            if (fileids.file_ids) {
                setfileids(fileids.file_ids)
            }
        })()
    }, [])

    if (!event.team_id) {
        const submitFile: ((formEntries: Record<string, string | File>) => void) = fe => {
            const fd = new FormData()
            fd.append('file', fe.file)
            postEventFile(fd, event.id)
        }
        return (
            <div className={styles.studentGlobalEvent}>
                <h2>{event.name}</h2>
                <p>{event.comment}</p>
                <span>Загруженные файлы:</span>
                <div className={styles.studentGlobalEvent__files}>
                {
                    fileids.map(f => <Link to={fileURL(f.file_id)} key={f.file_id}>{f.name}</Link>)
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