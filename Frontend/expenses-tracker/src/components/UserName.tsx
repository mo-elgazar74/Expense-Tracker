import { useState, useEffect } from 'react';

const UserName = () => {
  const [userName, setUserName] = useState('User Name');

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      setUserName(parsedUser.name || 'User Name');
    }
  }, []);

  return (
    <span className="mt-3 text-base font-medium">
      {userName}
    </span>
  );
};

export default UserName;
