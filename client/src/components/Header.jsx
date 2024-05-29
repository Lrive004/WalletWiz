import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return(
    <header>
      <div>
      <Link to="/">
        <h1>
          Welcome to WalletWiz
        </h1>
      </Link>
        <p>Your Personal budget Planner</p>
        <div>
          {Auth.loggedIn() ? (
            <button onClick={logout}>
              Logout
            </button>
          ) : (
            <>
            <Link to="/login">
              Login
            </Link>
            <Link to='/signup'>
              Signup
            </Link>
            </>
          )}
        </div>
        </div>
    </header>
  );
};

export default Header;