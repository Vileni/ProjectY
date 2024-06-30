import { useState, useEffect } from 'react';
import axios from 'axios';

const usePhotos = (url) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(url);
        setPhotos(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchPhotos();
  }, [url]);

  return { photos, loading, error };
};

export default usePhotos;
