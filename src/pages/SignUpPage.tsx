import React, { useState } from 'react';
import { SignUpForm } from "../components/auth/SignUpForm";
import { Wallet } from 'lucide-react';

export function SignUpPage() {
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async (name: string, email: string, password: string) => {
    try {
      // TODO: Implement actual API call
      console.log('Sign up attempt:', { name, email, password });
      setError(null);
    } catch  {
      setError('An error occurred during sign up. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Wallet className="h-12 w-12 text-indigo-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
            Sign in
          </a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {error && (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
              {error}
            </div>
          )}
          
          <SignUpForm onSubmit={handleSignUp} />
        </div>
      </div>
    </div>
  );
}