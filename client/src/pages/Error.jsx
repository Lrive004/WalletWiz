import { Link } from 'react-router-dom';

const Error = () => {
  const mainStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    padding: '20px'
  };

  const divStyle = {
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  const h1Style = {
    fontSize: '2.5rem',
    color: '#333'
  };

  const pStyle = {
    fontSize: '1.2rem',
    color: '#666',
    marginTop: '20px'
  };

  const linkStyle = {
    display: 'inline-block',
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '1rem'
  };

  return (
    <main style={mainStyle}>
      <div style={divStyle}>
        <h1 style={h1Style}>Page Not Found</h1>
        <p style={pStyle}>Oops, nothing to see here, please visit one of our other pages.</p>
        <Link to="/" style={linkStyle}>Go Back Home</Link>
      </div>
    </main>
  );
};

export default Error;
