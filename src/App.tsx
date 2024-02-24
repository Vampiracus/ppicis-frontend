import { useEffect } from 'react'
import { getMe } from './api/user'
import { useSelectUser } from './redux/slices/selectors'
import AuthPage from './pages/AuthPage/AuthPage'
import { setUserData } from './redux/slices/userSlice'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router'
import { signupURL } from './url'
import RegPage from './pages/RegPage/RegPage'
import MentorPage from './pages/MentorPage/MentorPage'
import { getCurrentSeason } from 'api/season'
import { setSeasonData } from 'slices/seasonSlice'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    async function init() {
      const me = await getMe()
      if (me.user) {
        dispatch(setUserData(me.user))
      }

      const season = await getCurrentSeason()
      if (season.season) {
        dispatch(setSeasonData(season.season))
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

  if (user.role === 'Mentor') {
    return (
      <MentorPage />
    )
  }

  return <>123</>
}

export default App
