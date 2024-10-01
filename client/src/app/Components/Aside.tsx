// src/components/Aside.tsx

import React from 'react';
import FolderTree, { Folder } from './FolderTree';

// Folder structure data with correct 'type' values
const folderData: Folder = {
  name: 'Root',
  type: 'folder',
  children: [
    {
      name: 'Client Albums',
      type: 'folder',
      children: [
        { name: 'Album 1', type: 'file' },
        { name: 'Album 2', type: 'file' },
      ],
    },
    {
      name: 'Admin',
      type: 'folder',
      children: [
        { name: 'Settings', type: 'file' },
        { name: 'User Management', type: 'file' },
      ],
    },
    {
      name: 'Trash',
      type: 'folder',
      children: [],
    },
  ],
};

const Aside: React.FC = () => {
  return (
    <aside className=" bg-white/5 border border-secondary/50 text-white w-64 p-4 h-full rounded-md ">
      <h2 className="text-xl font-bold mb-4 ">Folders</h2>
      <FolderTree folder={folderData} />
    </aside>
  );
};

export default Aside;
