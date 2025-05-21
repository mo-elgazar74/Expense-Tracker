import { useRouter } from 'next/router';
import { Button } from './ui/button';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear();
    router.push('/auth/login');
  };

  return (
    <Button 
      className="bg-red-600 hover:bg-red-700 border-none"
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
