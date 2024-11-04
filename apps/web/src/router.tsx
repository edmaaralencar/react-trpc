import { createBrowserRouter } from 'react-router-dom'

import { AuthLayout } from './pages/_layouts/auth'
import { Register } from './pages/auth/register'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
])
