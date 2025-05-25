import React from 'react';

const MyFiles = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">My Files</h2>
      <ul className="space-y-2">
        <li className="p-2 border rounded flex justify-between items-center">
          <span>resume.pdf</span>
          <button className="text-blue-600 hover:underline">Скачать</button>
        </li>
        <li className="p-2 border rounded flex justify-between items-center">
          <span>project-plan.docx</span>
          <button className="text-blue-600 hover:underline">Скачать</button>
        </li>
      </ul>
    </div>
  );
};

export default MyFiles;