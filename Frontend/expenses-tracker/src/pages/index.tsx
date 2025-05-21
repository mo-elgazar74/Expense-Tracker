import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/dashboard');
    } else {
      router.push('/auth/login');
    }
  }, [router]);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div>Redirecting to login...</div>
    </div>
  );
};

export default Index;
