import { Link } from 'react-router-dom';
import { FaBug } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '100px' }}>
      <FaBug style={{ fontSize: '100px', color: '#ffcc00' }} />
      <h1>404: Bug Found!</h1>
      <p>This page doesn't exist in our production environment.</p>
      <Link to="/" className="btn-primary" style={{ display: 'inline-block', marginTop: '20px' }}>
        Back to Safety
      </Link>
    </div>
  );
};

export default NotFound;