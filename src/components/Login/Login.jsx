import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firebase/Firebase.init";
import { useState } from "react";

const Login = () => {
    // user info ekta state e set kora holo 
    const [loggedinUser, setLoggedinUser] = useState(null)
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    // sing in
    const signinwithGoogle = () =>{
        // console.log('mama in comming');
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log(user);
            setLoggedinUser(user)
        })
        .catch((error)=> {
            console.log(error.message)
        })
    }
    const handleSignout = () =>{
        // console.log('mama tata ! tomare sing out mere dilam');
        signOut(auth)
        .then(result => {
            setLoggedinUser(null);
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div>
            {
                loggedinUser ? 
                <button onClick={handleSignout}>
                SignOut
               </button> 
               :   
               <button onClick={signinwithGoogle}>
                Google Login
              </button>
            }
           
            

            {
                loggedinUser && <div>
                    <p>User :{loggedinUser?.displayName}</p>
                    <p>User email :{loggedinUser?.email}</p>
                    <img src={loggedinUser?.photoURL} alt="" />
                </div>
            }

        </div>
    );
};

export default Login;