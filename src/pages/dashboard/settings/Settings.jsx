import React from 'react';

const Settings = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Имя пользователя</label>
          <input type="text" className="w-full p-2 border rounded" defaultValue="frontend17" />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full p-2 border rounded" defaultValue="you@example.com" />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Сохранить</button>
      </form>
    </div>
  );
};

export default Settings;