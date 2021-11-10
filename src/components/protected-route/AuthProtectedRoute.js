import { Route, Redirect } from "react-router"

const AuthProtectedRoute = ({ children, ...restOfProps }) => {
  const token = localStorage.getItem('token')

  console.log(children)
  return (
    <>
      {token ?
        <Redirect to="/" />
        :
        <Route {...restOfProps}>
          {children}
        </Route>
      }
    </>
  )
}

export default AuthProtectedRoute