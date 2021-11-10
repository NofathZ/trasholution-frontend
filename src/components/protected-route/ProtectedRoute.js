import { Route, Redirect } from "react-router"

const ProtectedRoute = ({ children, ...restOfProps }) => {
  const token = localStorage.getItem('token')

  console.log(children)
  return (
    <>
      {token ?
        <Route {...restOfProps}>
          {children}
        </Route>
        :
        <Redirect to="/login" />
      }
    </>
  )
}

export default ProtectedRoute