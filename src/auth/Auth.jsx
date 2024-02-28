import React, { useState } from 'react';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [error, setError] = useState('');

    const handleLogin = async () => {
       // login logic
    };

    const handleRegister = async () => {
        // register logic
    };

    const switchForm = () => {
        setIsLoginForm(!isLoginForm);
        setEmail('');
        setPassword('');
        setError('');
    };

    return (
        <div className='flex flex-col items-center'>
            <div className='form-buttons flex mb-4 pt-8'>
                <button
                    className={`text-2xl font-semibold py-4 mr-4 ${isLoginForm ? 'text-blue-500 underline underline-offset-8' : 'text-gray-600'}`}
                    onClick={switchForm}
                >
                    Sign In
                </button>
                <button
                    className={`text-2xl font-semibold py-4  ${isLoginForm ? 'text-gray-600' : 'text-blue-500 underline underline-offset-8'}`}
                    onClick={switchForm}
                >
                    Registration
                </button>
            </div>
            <div className='flex flex-col'>
                <div className='w-3/4 mx-auto'>
                    <input
                        className="form-input w-full px-2 py-1 m-2 rounded-md border-2 border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        className="form-input w-full px-2 py-1 m-2 rounded-md border-2 border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button
                    className='bg-customBlue w-[100px] mx-auto shadow-lg text-customWhite rounded-lg px-4 py-1 mb-6 mt-2 hover:bg-blue-700 hover:-translate-y-1 duration-300'
                    onClick={isLoginForm ? handleLogin : handleRegister}
                >
                    {isLoginForm ? 'Login' : 'Register'}
                </button>
                {error && <p className="text-red-500">{error}</p>}
            </div>
            <p className='my-4 login-bottom'>
                {isLoginForm ? "Don't have an account?" : "Already have an account?"}
                <button className='font-semibold underline ml-1' onClick={switchForm}>
                    {isLoginForm ? "Register" : "Login"}
                </button>
            </p>
        </div>
    );
};

export default Auth;
