import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { authAPI } from '../services/api';
import toast from 'react-hot-toast';

export const GoogleLoginButton = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSuccess = async (credentialResponse: CredentialResponse) => {
    try {
      if (!credentialResponse.credential) {
        toast.error('Login failed. Please try again.');
        return;
      }

      // In a real implementation, send this to your backend
      // For now, we'll simulate the response
      const mockResponse = {
        access_token: credentialResponse.credential,
        user: {
          id: '1',
          email: 'user@example.com',
          name: 'User',
          profileComplete: false,
        },
      };

      login(mockResponse.access_token, mockResponse.user);
      toast.success('Login successful!');
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login failed. Please try again.');
    }
  };

  const handleError = () => {
    toast.error('Google login failed. Please try again.');
  };

  return (
    <div className="flex justify-center">
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
        theme="filled_blue"
        size="large"
        text="signin_with"
        shape="rectangular"
      />
    </div>
  );
};
