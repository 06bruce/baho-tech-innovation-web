import { useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { AuthProvider } from './hooks/useAuth';
import { getApiBaseUrl, checkApiHealth } from './services/apiClient';
import './i18n';

export default function App() {
  useEffect(() => {
    // Log app initialization
    if (process.env.NODE_ENV === 'development') {
      console.log('╔════════════════════════════════════════════════╗');
      console.log('║     Baho Tech Innovation - App Started        ║');
      console.log('╚════════════════════════════════════════════════╝');
      
      console.log('ℹ️ Environment Configuration:');
      console.log(`   API Base URL: ${getApiBaseUrl()}`);
      console.log(`   Frontend URL: ${import.meta.env.VITE_FRONTEND_URL || window.location.origin}`);
      console.log(`   Environment: ${import.meta.env.VITE_APP_ENV || 'development'}`);
      
      // Check API health
      checkApiHealth().then((result) => {
        if (result.ok) {
          console.log('✅ API Connection: OK');
        } else {
          console.warn('⚠️ API Connection: Failed - API might be unreachable');
        }
      }).catch(() => {
        console.warn('⚠️ API Connection: Failed - API might be unreachable');
      });
      
      console.log('═'.repeat(50) + '\n');
    }
  }, []);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
