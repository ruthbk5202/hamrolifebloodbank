"use client";
import React, { useState } from 'react';
import './Adminlogin.css';
import { useRouter } from 'next/navigation';

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState(''); // Changed from 'username' to 'email'
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // 1. Send login request to your backend
      const response = await fetch('http://localhost:8000/api/V1/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      // 2. Handle response
      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      // 3. Store the JWT token (e.g., in localStorage)
      localStorage.setItem('adminToken', data.token);

      // 4. Redirect to admin dashboard
      router.push('/admin/dashboard');
    } catch (err: any) {
      setError(err.message || 'Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='login-overlay'>
      <div className="login-container">
        <div className="login-box">
          <div className="login-header">
            <h1>Blood Bank Admin</h1>
            <div className="blood-drop-icon">
              <svg viewBox="0 0 24 24" width="40" height="40">
                <path 
                  fill="#cf3d36" 
                  d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                />
              </svg>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            {error && <div className="error-message">{error}</div>}
            
            <div className="input-group">
              <label htmlFor="email">Email</label> {/* Changed from 'username' */}
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="login-button"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          
          <div className="login-footer">
            <a href="/forgot-password">Forgot password?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;