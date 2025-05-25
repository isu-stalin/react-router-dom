import React from 'react';

const Briefing = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Briefing</h2>
      <p className="text-gray-700">
        Добро пожаловать! Здесь ты найдешь краткую сводку последних событий, обновлений и важной информации по системе.
      </p>
      <ul className="mt-4 list-disc list-inside text-gray-600">
        <li>3 новых студента добавлены</li>
        <li>Запланирован урок на 15:00</li>
        <li>Сервер работает стабильно</li>
      </ul>
    </div>
  );
};

export default Briefing;