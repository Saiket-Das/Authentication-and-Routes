import React from 'react';
import useFirebase from '../Hooks/useFirbase';
import './Login.css'
const Login = () => {

    const { handleSignInWithGoogle } = useFirebase()

    return (
        <div>
            <h2>LOGIN HERE!</h2>

            <button onClick={handleSignInWithGoogle}>Google Sign in</button>


            {/* LOGIN FORM  */}
            <form action="">
                <input type="text" placeholder='Email Address' />
                <br />
                <input type="password" placeholder='Password' />
                <br />
                <input type="submit" value="Login" />
            </form>

        </div>
    );
};

export default Login;