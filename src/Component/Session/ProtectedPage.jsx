import React from 'react';
import { Navigate } from 'react-router-dom';
import Dashboard from '../components/page/Dashboard';

function ProtectedPage() {
  const sessionActive = localStorage.getItem('sessionActive') === 'true';

  return sessionActive ? <Navigate to="/home"/> : <Navigate to="/" />;
}

export default ProtectedPage;