import React from 'react';

const Records = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Records</h2>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Дата</th>
            <th className="border border-gray-300 px-4 py-2">Тип</th>
            <th className="border border-gray-300 px-4 py-2">Детали</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">25.05.2025</td>
            <td className="border px-4 py-2">Вход</td>
            <td className="border px-4 py-2">IP: 192.168.1.1</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">24.05.2025</td>
            <td className="border px-4 py-2">Обновление</td>
            <td className="border px-4 py-2">Изменён email</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Records;