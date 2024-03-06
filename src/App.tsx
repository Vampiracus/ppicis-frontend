import { useEffect } from 'react'
import { getMe } from './api/user'
import { useSelectIsUserBeingLoaded, useSelectUser } from './redux/slices/selectors'
import AuthPage from './pages/AuthPage/AuthPage'
import { setIsUserBeingLoaded, setUserData } from './redux/slices/userSlice'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router'
import { signupURL } from './url'
import RegPage from './pages/RegPage/RegPage'
import MentorPage from './pages/MentorPage/MentorPage'
import { getCurrentSeason } from 'api/season'
import { setSeasonData } from 'slices/seasonSlice'
import Loader from 'components/Loader/Loader'
import StudentPage from './pages/StudentPage/StudentPage'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    async function init() {
      const me = await getMe()
      dispatch(setIsUserBeingLoaded(false))
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
  const loading = useSelectIsUserBeingLoaded()

  if (loading) {
    return <Loader/>
  }

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

  if (user.role === 'Student') {
    return (
      <StudentPage />
    )
  }

  return <>Когда-то здесь будет страница для ползователей {user.role}</>
}

export default App
