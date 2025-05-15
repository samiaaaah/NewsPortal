import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AdminLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://localhost:3000/admin/login', data);

      if (response.data.success) {
        setSuccess('Login successful! Redirecting...');
        localStorage.setItem('token', response.data.token);
        setTimeout(() => {
          window.location.href = '/admin';
        }, 1000);
      } else {
        setError(response.data.message || 'Invalid credentials');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center p-10 min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <h5 className="text-xl font-medium text-gray-900">Login</h5>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
              Enter your email
            </label>
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address',
                },
              })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="admin@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
              Enter your password
            </label>
            <input
              type="password"
              id="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters',
                },
                maxLength: {
                  value: 20,
                  message: 'Password must not exceed 20 characters',
                },
              })}
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          {success && <p className="text-green-600 text-sm">{success}</p>}
          <button
            type="submit"
            className="w-full text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5"
            disabled={loading}
          >
            
            {loading ? 'Logging in...' : 'Login'}
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
