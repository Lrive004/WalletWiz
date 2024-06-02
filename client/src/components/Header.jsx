import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const headerStyle = {
    backgroundColor: '#4CAF50',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff'
  };

  const h1Style = {
    fontSize: '2rem',
    margin: '0'
  };

  const pStyle = {
    fontSize: '1.2rem',
    margin: '5px 0'
  };

  const navStyle = {
    display: 'flex',
    gap: '15px',
    marginTop: '10px'
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem'
  };

  const buttonStyle = {
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    borderRadius: '5px'
  };

  return(
    <header style={headerStyle}>
      <div style={divStyle}>
        <Link to="/" style={linkStyle}>
          <h1 style={h1Style}>Welcome to WalletWiz</h1>
        </Link>
        <p style={pStyle}>Your Personal Budget Planner</p>
        <nav style={navStyle}>
          {Auth.loggedIn() ? (
            <button style={buttonStyle} onClick={logout}>Logout</button>
          ) : (
            <>
              <Link to="/login" style={linkStyle}>Login</Link>
              <Link to="/signup" style={linkStyle}>Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
