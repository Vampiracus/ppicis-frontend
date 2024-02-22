import { useEffect } from 'react'
import { getMe } from './api/user'
import { useSelectUser } from './redux/slices/selectors'
import AuthPage from './pages/AuthPage/AuthPage'
import { setUserData } from './redux/slices/userSlice'
import { useDispatch } from 'react-redux'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    async function init() {
      const me = await getMe()
      if (me.user) {
        dispatch(setUserData(me.user))
      }
    }

    init()
  }, [ dispatch ])

  const user = useSelectUser()
  console.log('user', user)

  if (!user) {
    return <AuthPage/>
  }

  return <>123</>
}

export default App
