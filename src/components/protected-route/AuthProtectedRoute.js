import { Route, Redirect } from "react-router"
import { useEffect, useState } from "react"
import API from "../../api/api"

const AuthProtectedRoute = ({ children, ...restOfProps }) => {
  const token = localStorage.getItem('token')
  const role = localStorage.getItem('role')

  var d = new Date(); // for now
  console.log(d.getHours()) // => 9

  return (
    <>
      {token ?
        role === "pengguna" ? <Redirect to="/trashpicker" /> : <Redirect to="/trashpicker" />
        :
        d.getHours() >= 7 && d.getHours() <= 18 ?
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