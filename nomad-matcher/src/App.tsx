import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './hooks/useAuth';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Landing } from './pages/Landing';
import { Dashboard } from './pages/Dashboard';
import { FarmerRegistration } from './pages/Register/FarmerRegistration';
import { CreatorRegistration } from './pages/Register/CreatorRegistration';
import { TouristRegistration } from './pages/Register/TouristRegistration';
import { Gigs } from './pages/Gigs';

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';

function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/register/farmer"
                  element={
                    <ProtectedRoute>
                      <FarmerRegistration />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/register/creator"
                  element={
                    <ProtectedRoute>
                      <CreatorRegistration />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/register/tourist"
                  element={
                    <ProtectedRoute>
                      <TouristRegistration />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/gigs"
                  element={
                    <ProtectedRoute>
                      <Gigs />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </main>
            <Footer />
          </div>
          <Toaster position="top-right" />
        </Router>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
