import { createContext,  useEffect,  useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthProvider= createContext(null);
const ContextProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loader, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    //Create user with email and passsword
      const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
      };
// Login user with email and password
      const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
      };

    // Login with gmail
    const GmailLogin=()=>{
      setLoading(true);
      signInWithPopup(auth, googleProvider);
    }

      const updateUserProfile=(name,photo)=>{
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
      }

      const LogOut=()=>{
        signOut(auth);
      }

      useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            console.log("Current user",currentUser);
            setLoading(false);
        })
        return ()=>{
          return unsubscribe();
        }
      },[])

    const authInfo = {
      user,
      loader,
      createUser,
      signIn,
      LogOut,
      updateUserProfile,
      GmailLogin,
    };
    return (
        <AuthProvider.Provider value={authInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default ContextProvider;