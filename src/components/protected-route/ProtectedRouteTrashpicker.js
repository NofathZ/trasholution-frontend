import { Route, Redirect } from "react-router"

const ProtectedRouteTrashpicker = ({ children, ...restOfProps }) => {
  const token = localStorage.getItem('token')
  const role = localStorage.getItem('role')

  return (
    <>
      {token ?
        role == "trashpicker" ?
          <Route {...restOfProps}>
            {children}
          </Route>
          :
          <Redirect to="/" />
        :
        <Redirect to="/" />
      }
    </>
  )
}

export default ProtectedRouteTrashpicker