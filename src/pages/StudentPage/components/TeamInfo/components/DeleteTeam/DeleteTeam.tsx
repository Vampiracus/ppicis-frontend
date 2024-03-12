import Button from 'components/Button/Button'
import { useSelectSeason } from 'slices/selectors'
import { seasonStatuses } from '../../../../../../types/types'
import { dismantleMyTeam } from 'api/teams'
import { FC } from 'react'

const DeleteTeam: FC<{ increaseChanged: () => void }> = ({ increaseChanged }) => {
    const season = useSelectSeason()
    
    if (season?.status !== seasonStatuses.CREATING_TEAMS) {
        return ''
    }

    const dismantle = async () => {
        if (!confirm('Вы уверены, что хотите удалить команду?')) return
        const res = await dismantleMyTeam()
        if (res.status === 200) {
            increaseChanged()
        }
    }

    return (
        <Button
            text='Удалить команду!'
            title='Нельзя выйти из команды. Чтобы создать новую команду, нужно удалить старую'
            onClick={dismantle}/>
    );
};

export default DeleteTeam;