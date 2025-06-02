import { useEffect, useState } from 'react';

export default function Home() {
  const [telegramId, setTelegramId] = useState(null);

  useEffect(() => {
    console.log('✅ Home.jsx загружен');
    try {
      const userId = window?.Telegram?.WebApp?.initDataUnsafe?.user?.id;
      console.log('Telegram ID:', userId);
      setTelegramId(userId || 'не найден');
    } catch (e) {
      console.error('Ошибка получения Telegram ID:', e);
    }
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Добро пожаловать в NOTE Mini App</h1>
      <p><strong>Telegram ID:</strong> {telegramId}</p>
    </div>
  );
}
