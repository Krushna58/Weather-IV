import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SessionManager() {
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    const logoutUser = () => {
      localStorage.removeItem('sessionActive');
      alert('Session expired due to inactivity');
      navigate('/');
    };

    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(logoutUser,  5 * 60 * 1000);
    };

    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keydown', resetTimer);
    resetTimer();

    return () => {
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('keydown', resetTimer);
      clearTimeout(timer);
    };
  }, [navigate]);

  return null;
}

export default SessionManager;