import { useEffect } from 'react'
import { getMe } from './api/user'
import { useSelectUser } from './redux/slices/selectors'
import AuthPage from './pages/AuthPage/AuthPage'
import { setUserData } from './redux/slices/userSlice'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router'
import { signupURL } from './url'
import RegPage from './pages/RegPage/RegPage'

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

  if (!user) {
    return (
      <Routes>
        <Route path={signupURL} element={<RegPage/>}/>
        <Route path='*' element={<AuthPage/>}/>
      </Routes>
    )
  }

  return <>123</>
}

export default App
