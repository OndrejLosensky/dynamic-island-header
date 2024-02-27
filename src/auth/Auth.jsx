import React, { useState } from 'react';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoginForm, setIsLoginForm] = useState(true);

    const handleLogin = () => {
        // Your login logic here
        console.log('Logging in with:', email, password);
        // Optionally, you can redirect or perform other actions after login
    };

    const handleRegister = () => {
        // Your registration logic here
        console.log('Registering with:', email, password);
        // Optionally, you can redirect or perform other actions after registration
    };

    const switchForm = () => {
        setIsLoginForm(!isLoginForm);
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div className='flex flex-col items-center'>
            <div className='flex mb-4 pt-4'>
                <button
                    className={`text-2xl font-semibold py-4 mr-4 ${isLoginForm ? 'text-blue-500 underline underline-offset-2' : 'text-gray-600 no-underline'}`}
                    onClick={switchForm}
                >
                    Login
                </button>
                <button
                    className={`text-2xl font-semibold py-4  ${isLoginForm ? 'text-gray-600 no-underline' : 'text-blue-500 underline underline-offset-2'}`}
                    onClick={switchForm}
                >
                    Register
                </button>
            </div>
            <div className='flex flex-col'>
                <input
                    className="w-full px-2 py-1 m-2 rounded-md border-2 border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                    type="email"
                    placeholder="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="w-full px-2 py-1 m-2 rounded-md border-2 border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {!isLoginForm && ( // Rendering confirm password input only for register form
                    <input
                        className="w-full px-2 py-1 m-2 rounded-md border-2 border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                )}
                {isLoginForm ? (
                    <button
                        className='bg-customBlue w-[100px] mx-auto shadow-lg text-customWhite rounded-lg px-4 py-1 mb-6 mt-2 hover:bg-blue-700 hover:-translate-y-1 duration-300'
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                ) : (
                    <button
                        className='bg-customBlue w-[100px] mx-auto shadow-lg text-customWhite rounded-lg px-4 py-1 mb-6 mt-2 hover:bg-blue-700 hover:-translate-y-1 duration-300'
                        onClick={handleRegister}
                    >
                        Register
                    </button>
                )}
            </div>
            <p className='my-4'>
                {isLoginForm ? "Don't have an account?" : "Already have an account?"}
                <button className='font-semibold underline ml-1' onClick={switchForm}>
                    {isLoginForm ? "Register" : "Login"}
                </button>
            </p>
        </div>
    );
};

export default Auth;
