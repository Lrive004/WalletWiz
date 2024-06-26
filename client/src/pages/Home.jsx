import { useQuery } from '@apollo/client';

const Home = () => {
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

  return(
    <main style={mainStyle}>
      <div style={divStyle}>
        <h1 style={h1Style}>The app you need to take a hold of your budget.</h1>
        <p style={pStyle}>Wallet Wiz provides you with the magic of transforming your finances by showing you where it keeps disappearing to, keep an eye on your money and watch it grow!</p>
      </div>
    </main>
  )
}

export default Home;
