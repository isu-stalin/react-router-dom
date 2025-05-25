import React from 'react';

const Notifications = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
      <ul className="space-y-3">
        <li className="bg-gray-100 p-3 rounded shadow-sm">💬 Новое сообщение от администратора</li>
        <li className="bg-gray-100 p-3 rounded shadow-sm">📢 Напоминание: урок завтра в 10:00</li>
        <li className="bg-gray-100 p-3 rounded shadow-sm">✅ Профиль успешно обновлён</li>
      </ul>
    </div>
  );
};

export default Notifications;
