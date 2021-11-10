import { Route, Redirect } from "react-router"

const ProtectedRoutePengguna = ({ children, ...restOfProps }) => {
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
        <Redirect to="/" />
      }
    </>
  )
}

export default ProtectedRoutePengguna