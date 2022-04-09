import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>REGISTER FROM</h2>

            <form action="">
                <input type="text" placeholder='Your name' />
                <br />
                <input type="text" placeholder='Email Address' />
                <br />
                <input type="password" placeholder='Password' />
                <br />
                <input type="submit" value="Register" />

            </form>

        </div>
    );
};

export default Register;