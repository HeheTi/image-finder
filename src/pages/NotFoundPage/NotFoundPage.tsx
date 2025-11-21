import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '24px',
      }}
    >
      <h1 style={{ fontSize: '32px', marginBottom: '12px' }}>404 – Page Not Found</h1>

      <p style={{ fontSize: '16px', color: '#666', marginBottom: '24px' }}>
        The page you’re looking for doesn’t exist or might have been moved.
      </p>

      <Link
        to="/"
        style={{
          padding: '12px 24px',
          backgroundColor: '#3f51b5',
          color: '#fff',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: 500,
          fontSize: '16px',
        }}
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
