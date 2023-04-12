import React,{createContext,useState} from "react";
import { auth } from "./Firebase";
import { getAuth, signInWithEmailAndPassword ,createUserWithEmailAndPassword,signOut} from 'firebase/auth';

export const AuthContext= createContext({});

const AuthProvider=({children})=>{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [user,setUser]=useState(null)


    const handleLogin= async()=>{
        await auth.signInWithEmailAndPassword(email,pass).then(userCredenttials=>{
            setUser(userCredenttials.user)
        }).cacth(error=>{
            const errorCode=error.code;
            const errorMessage=error.message;
            if(errorCode=='auth/weak-password'){
                alert('yah sur')
            }else{
                alert(errorMessage)
            }
            console.log(error);
        })
    }

    const handleSignUp= async()=>{
        await auth.createUserWithEmailAndPassword(name,email,pass).then(userCredenttials=>{
            setUser(userCredenttials.user)
        }).cacth(error=>{
            const errorCode=error.code;
            const errorMessage=error.message;
            if(errorCode=='auth/weak-password'){
                alert('yah sur')
            }else{
                alert(errorMessage)
            }
            console.log(error);
        })
    }

    const logout= ()=>{
        auth.signOut().then(setUser(null)).then(console.log('dnag ky thanh cong'))
    }


    return(
        <AuthContext.Provider value={{
            user,setUser,
            email,setEmail,
            pass,setPass,
            name,setName,
            handleLogin,handleSignUp,logout
        }}>
            {children}

        </AuthContext.Provider>
    )
}
export default AuthProvider