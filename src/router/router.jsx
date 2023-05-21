import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Profile from '../features/profile/Profile'
import Error from '../pages/Error'
import Login from '../features/auth/Login'
import RequireAuth from '../features/auth/RequireAuth'

function Router() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Home />} />
      <Route path="signin" element={<Login />} />
      <Route path="*" element={<Error />} />

      {/* Protected routes */}
      <Route element={<RequireAuth />}>
        <Route path="user" element={<Profile />} />
      </Route>
    </Routes>
  )
}

export default Router
