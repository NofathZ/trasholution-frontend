import { Route, Redirect } from "react-router"
import { useEffect, useState } from "react"
import API from "../../api/api"

const AuthProtectedRoute = ({ children, ...restOfProps }) => {
  const token = localStorage.getItem('token')
  const role = localStorage.getItem('role')
  
  return (
    <>
      {token ?
        role.toLowerCase() === "pengguna" ? <Redirect to="/" /> : <Redirect to="/trashpicker" />
        :
        <Route {...restOfProps}>
          {children}
        </Route>
      }
    </>
  )
}

export default AuthProtectedRoute