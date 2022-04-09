import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirbase';
import './Header.css'

const Header = () => {

    const { user, handleSignOut } = useFirebase();

    return (
        <div className='header'>
            <nav className='navLink'>
                <Link to='/Home'>Home</Link>
                <Link to='/register'>Register</Link>

                {
                    <span >{user?.displayName && user.displayName}</span>
                }

                {user?.uid
                    ?
                    <button onClick={handleSignOut}>Sign out</button>
                    :
                    <Link to='/login'>Login</Link>
                }

            </nav>

        </div>
    );
};

export default Header;