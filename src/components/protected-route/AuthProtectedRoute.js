import { Route, Redirect } from "react-router"
import { useEffect, useState } from "react"
import API from "../../api/api"

const AuthProtectedRoute = ({ children, ...restOfProps }) => {
  const token = localStorage.getItem('token')
  const role = localStorage.getItem('role')

  var d = new Date();

  return (
    <>
      {token ?
        role === "pengguna" ? <Redirect to="/trashpicker" /> : <Redirect to="/trashpicker" />
        :
        d.getHours() >= 1 && d.getHours() <= 24 ?
          <Route {...restOfProps}>
            {children}
          </Route>
          :
          <Redirect to="/" />
      }
    </>
  )
}

export default AuthProtectedRoute