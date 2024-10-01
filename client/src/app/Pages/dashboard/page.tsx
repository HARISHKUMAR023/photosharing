"use client"; // Indicate this is a Client Component

import React, { useState } from 'react';
import { Link } from 'react-router-dom';


interface Album {
  _id: string;
  name: string;
  client: string;
}

const Dashboard: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [albumName, setAlbumName] = useState('');
  const [clientName, setClientName] = useState('');

  // Handle album creation (mock implementation)
  const handleCreateAlbum = () => {
    const newAlbum: Album = {
      _id: Date.now().toString(), // Simple ID generation
      name: albumName,
      client: clientName,
    };
    setAlbums([...albums, newAlbum]);  // Update state with the new album
    setAlbumName('');
    setClientName('');
  };

  return (
    <div className=" gap-2 w-full">
     
      <h1 className="text-3xl font-bold mb-4">Your Albums</h1>

      {/* Album Creation Form */}
      <div className="mb-6 bg-white/5 border border-secondary/50 p-4 shadow rounded-lg w-full">
        <h2 className="text-xl font-bold mb-4">Create New Album</h2>
        <input
          className="mb-2 p-2 w-full border rounded"
          placeholder="Album Name"
          value={albumName}
          onChange={(e) => setAlbumName(e.target.value)}
        />
        <input
          className="mb-2 p-2 w-full border rounded"
          placeholder="Client Name"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white py-2 rounded w-full"
          onClick={handleCreateAlbum}
        >
          Create Album
        </button>
      </div>

      {/* Album List */}
      <div className="grid grid-cols-3 gap-4">
        {albums.map((album) => (
          <div key={album._id} className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">{album.name}</h2>
            <p className="text-gray-500">Client: {album.client}</p>
            <Link to={`/album/${album._id}`}>
              <button className="bg-blue-500 text-white py-2 mt-4 rounded w-full">
                View Album
              </button>
            </Link>
          </div>
        ))}
      </div></div>
    
  );
};

export default Dashboard;
