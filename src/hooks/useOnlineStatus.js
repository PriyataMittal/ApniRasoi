import { useEffect, useState } from 'react';

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

  const updateOnlineStatus = () => {
    setOnlineStatus(navigator.onLine);
  };

  useEffect(() => {
    return () => {
      updateOnlineStatus();
    };
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
