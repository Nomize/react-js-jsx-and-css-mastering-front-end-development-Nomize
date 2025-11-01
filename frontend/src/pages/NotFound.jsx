import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button.jsx';

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="mb-6">Page not found!</p>
      <Link to="/">
        <Button>Go Back Home</Button>
      </Link>
    </div>
  );
}
