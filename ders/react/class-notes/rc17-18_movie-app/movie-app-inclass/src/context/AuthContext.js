import {
  GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";
  import React, { createContext, useEffect, useState } from "react";
  import { auth } from "../auth/firebase";
  import {useNavigate} from "react-router-dom"
import { toastErrorNotify, toastSuccessNotify, toastWarnNotify } from "../helpers/ToastNotify";
  
  
  export const AuthContext = createContext();
  
  //* with custom hook
  // export const useAuthCotext =() => {
  //     return useContext(AuthContext)
  // }
  
  const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(false)
    let navigate = useNavigate()

    useEffect(() => {
      userObserver()
    }, [])
    
    const createUser = async (email, password, displayName) => {
      //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
      try {
        let userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
      
        await updateProfile(auth.currentUser, {
          displayName,
        })
        navigate("/")
        toastSuccessNotify("Registered successfully!")
      } catch (error) {
       toastErrorNotify(error.message)
      }
    };
  
    //* https://console.firebase.google.com/
    //* => Authentication => sign-in-method => enable Email/password
    //! Email/password ile girişi enable yap
    const signIn = async (email, password) => {
      try {
        //? mevcut kullanıcının giriş yapması için kullanılan firebase metodu
        await signInWithEmailAndPassword(auth, email, password);
        toastSuccessNotify("Logged in successfully!")
      } catch (error) {
        console.log(error.message);
        navigate("/")
        toastErrorNotify("error.message")
      }
    };

    const logOut = () =>{
      signOut(auth)
      toastSuccessNotify("Logged out successfully")
    }
    
   const userObserver = () =>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {email, displayName, photoUrl} = user
        setCurrentUser({email, displayName, photoUrl})
        console.log(user);

        const uid = user.uid;
        // ...
      } else {
        setCurrentUser(false)
        console.log("logged out")
      }
    });
   }
  

   //* https://console.firebase.google.com/
  //* => Authentication => sign-in-method => enable Google
  //! Google ile girişi enable yap
  //* => Authentication => settings => Authorized domains => add domain
  //! Projeyi deploy ettikten sonra google sign-in çalışması için domain listesine deploy linkini ekle
  const signUpProvider = () => {
    //? Google ile giriş yapılması için kullanılan firebase metodu
    const provider = new GoogleAuthProvider();
    //? Açılır pencere ile giriş yapılması için kullanılan firebase metodu
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
      });
  };

  const forgotPassword = (email) => {
    //? Email yoluyla şifre sıfırlama için kullanılan firebase metodu
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        toastWarnNotify("Please check your mail box!");
        // alert("Please check your mail box!");
      })
      .catch((err) => {
        toastErrorNotify(err.message);
        // alert(err.message);
        // ..
      });
  };

    const values = { createUser, signIn, logOut, currentUser, signUpProvider, forgotPassword };
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;//sarmallama yapılan kısımların propları çekmesi için oluşturulan değişken
  };//children prop değeri verilecek childler demektir ve orda prop değerlerinin geçiş sağlayabilmesi için yazıldı
  
  export default AuthContextProvider;
  