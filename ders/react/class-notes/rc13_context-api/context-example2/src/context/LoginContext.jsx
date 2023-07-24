import { createContext, useState } from "react"

//! Login Context'i olusuturuldu
export const LoginContext = createContext()

//! Sarmalayici (Provider) Component
const LoginProvider = ({ children }) => {
  // //! Local State
  const [user, setUser] = useState({ email: "", password: "" })

  const values = {
    user,
    setUser,
  }

  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  )
}

export default LoginProvider
