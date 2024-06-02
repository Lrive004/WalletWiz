import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const footerStyle = {
    width: '100%',
    marginTop: 'auto',
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center'
  };

  const containerStyle = {
    marginBottom: '20px'
  };

  const buttonStyle = {
    backgroundColor: '#555',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    borderRadius: '5px',
    marginBottom: '20px'
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {location.pathname !== '/' && (
          <button
            style={buttonStyle}
            onClick={() => navigate('/')}
          >
            &larr; Go Back
          </button>
        )}
        <h4>&copy; {new Date().getFullYear()} - WalletWiz</h4>
      </div>
    </footer>
  );
};

export default Footer;
