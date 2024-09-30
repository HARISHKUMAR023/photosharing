// src/pages/AlbumPage.tsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Photo {
  _id: string;
  url: string;
  isSelected: boolean;
}

const AlbumPage: React.FC = () => {
  const { albumId } = useParams<{ albumId: string }>();  // Get album ID from URL
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhotos, setSelectedPhotos] = useState<string[]>([]);

  // Fetch photos when the page loads
  useEffect(() => {
    async function fetchPhotos() {
      const response = await axios.get(`/api/albums/${albumId}/photos`);  // Fetch photos from backend
      setPhotos(response.data);
    }
    fetchPhotos();
  }, [albumId]);

  // Handle photo selection
  const handleSelectPhoto = (photoId: string) => {
    if (selectedPhotos.includes(photoId)) {
      setSelectedPhotos(selectedPhotos.filter((id) => id !== photoId));
    } else {
      setSelectedPhotos([...selectedPhotos, photoId]);
    }
  };

  // Handle photo submission
  const handleSubmitSelection = async () => {
    await axios.post(`/api/albums/${albumId}/select`, { selectedPhotos });  // Send selected photos to backend
    alert('Photos selected successfully!');
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Select Your Photos</h1>

      {/* Photo Gallery */}
      <div className="grid grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div key={photo._id} className="relative">
            <img src={photo.url} alt="Photo" className="rounded-lg shadow-lg" />
            <div className="absolute top-0 right-0 m-2">
              <input
                type="checkbox"
                checked={selectedPhotos.includes(photo._id)}
                onChange={() => handleSelectPhoto(photo._id)}
                className="h-6 w-6 form-checkbox text-blue-500"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <button
        className="bg-blue-500 text-white py-2 mt-6 rounded w-full"
        onClick={handleSubmitSelection}
      >
        Submit Selected Photos
      </button>
    </div>
  );
};

export default AlbumPage;
