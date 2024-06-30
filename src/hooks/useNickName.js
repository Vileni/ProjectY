import { useState, useEffect } from 'react';

const useNickname = (key) => {
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    const storedNickname = localStorage.getItem(key);
    if (storedNickname) {
      setNickname(storedNickname);
    }
  }, [key]);

  const saveNickname = (newNickname) => {
    localStorage.setItem(key, newNickname);
    setNickname(newNickname);
  };

  return [nickname, saveNickname];
};

export default useNickname;
