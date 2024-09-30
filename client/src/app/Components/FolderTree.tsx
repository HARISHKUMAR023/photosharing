// src/components/FolderTree.tsx

import React, { useState } from 'react';
import { FaFolder, FaFolderOpen, FaFileAlt } from 'react-icons/fa';

export interface Folder {
  name: string;
  type: 'folder' | 'file'; // Restricting 'type' to either 'folder' or 'file'
  children?: Folder[];     // Optional children for folder type
}

interface FolderProps {
  folder: Folder;
}

const FolderTree: React.FC<FolderProps> = ({ folder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    if (folder.type === 'folder') {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="ml-4">
      {/* Folder or File Icon */}
      <div className="flex items-center cursor-pointer" onClick={toggleOpen}>
        {folder.type === 'folder' ? (
          isOpen ? <FaFolderOpen className="mr-2" /> : <FaFolder className="mr-2" />
        ) : (
          <FaFileAlt className="mr-2" />
        )}
        <span>{folder.name}</span>
      </div>

      {/* If the folder is open, display its children */}
      {isOpen && folder.children && (
        <div className="ml-4">
          {folder.children.map((childFolder, index) => (
            <FolderTree key={index} folder={childFolder} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FolderTree;
