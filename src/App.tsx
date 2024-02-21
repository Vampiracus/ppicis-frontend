import { useEffect } from 'react'
import { getMe } from './api/user'
import { useSelectUser } from './redux/slices/selectors'
import AuthPage from './pages/AuthPage/AuthPage'

function App() {

  useEffect(() => {
    getMe()
  })

  const user = useSelectUser()

  if (!user) {
    return <AuthPage/>
  }
}

export default App
