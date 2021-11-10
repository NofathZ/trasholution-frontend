import { Route, Redirect } from "react-router"

const ProtectedRouteDefault = ({ children, ...restOfProps }) => {
  const token = localStorage.getItem('token')
  const role = localStorage.getItem('role')

  return (
    <>
      {token ?
        role == "pengguna" ?
          <Route {...restOfProps}>
            {children}
          </Route>
          :
          <Redirect to="/trashpicker" />
        :
        <Route {...restOfProps}>
          {children}
        </Route>
      }
    </>
  )
}

export default ProtectedRouteDefault