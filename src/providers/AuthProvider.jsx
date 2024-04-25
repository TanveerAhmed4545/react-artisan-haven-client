import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(false);


    // create Account
    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);

    }

     // signIn
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
     
    
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
          // console.log("user in the auth state changed",currentUser);
          setUser(currentUser);
          setLoading(false);
        });
        return () => {
          unSubscribe();
        };
      }, [reload]);
    

    const authInfo = {
        createUser,
        setReload,
        loading,
        user,
        signIn
    };
    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
        
    );
};

export default AuthProvider;
