import { useTypedSelector } from '../store'

export const useSelectUser = () => useTypedSelector(s => s.user.data)
export const useSelectIsUserBeingLoaded = () => useTypedSelector(s => s.user.loading)

export const useSelectSeason = () => useTypedSelector(s => s.season.data)