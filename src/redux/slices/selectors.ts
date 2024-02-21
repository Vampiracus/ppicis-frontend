import { useTypedSelector } from '../store'

export const useSelectUser = () => useTypedSelector(s => s.user.data)