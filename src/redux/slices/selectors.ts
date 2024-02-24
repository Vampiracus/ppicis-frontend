import { useTypedSelector } from '../store'

export const useSelectUser = () => useTypedSelector(s => s.user.data)

export const useSelectSeason = () => useTypedSelector(s => s.season.data)