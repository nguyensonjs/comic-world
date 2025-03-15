import { FC } from 'react'
import { Navigate } from 'react-router-dom'

import { ROUTES } from 'defines'

interface Props {
  isAuthenticated: boolean
  element: React.ElementType
}

export const AuthGuard: FC<Props> = ({ element: Component, isAuthenticated }) => {
  return isAuthenticated ? <Component /> : <Navigate to={ROUTES.PUBLIC.LOGIN} replace />
}
