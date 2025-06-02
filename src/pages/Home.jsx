import { useEffect, useState } from 'react';

export default function Home() {
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      console.log('✅ Home.jsx загружен');
      const tg = window?.Telegram?.WebApp;
      console.log('Telegram WebApp:', tg);
    } catch (e) {
      setError(e.message);
    }
  }, []);

  return (
    <div style={{ padding: 20, color: 'white' }}>
      <h1>Добро пожаловать в NOTE Mini App</h1>
      {error && <p style={{ color: 'red' }}>Ошибка: {error}</p>}
    </div>
  );
}
