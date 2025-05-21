import { AppProps } from 'next/app';
import '../styles/globals.css';
import ProtectedRoute from '@/components/layouts/ProtectedRoute';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProtectedRoute>
      <Component {...pageProps} />
    </ProtectedRoute>
  );
}

export default MyApp;
