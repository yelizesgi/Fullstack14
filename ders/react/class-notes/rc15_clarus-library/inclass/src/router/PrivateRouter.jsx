import { Navigate, Outlet } from "react-router-dom"
import {useAuthContext} from "../context/AuthContext"
import About from "../pages/about/About"
// import { useContext } from "react"
const PrivateRouter = () => {
  const {user} = useAuthContext()
  return (
   user ? <Outlet/> : <Navigate to="/login"/>
  )
}

export default PrivateRouter