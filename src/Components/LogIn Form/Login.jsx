import React, { useState, useEffect } from 'react';

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLogin, setShowLogin] = useState(true);

    // Form inputs
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        const user = localStorage.getItem('userLoggedIn');
        if (user) {
            setIsLoggedIn(true);
        } else {
            setShowLogin(true);
        }
    }, []);

    const handleLogin = () => {
        const user = {
            email: loginEmail,
            name: 'Test User'
        };
        localStorage.setItem('userLoggedIn', 'true');
        localStorage.setItem('userData', JSON.stringify(user));
        setIsLoggedIn(true);
        alert("Logged in successfully!");
    };

    const handleSignUp = () => {
        if (signUpPassword !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const user = {
            name: `${firstName} ${lastName}`,
            email: signUpEmail
        };
        localStorage.setItem('userLoggedIn', 'true');
        localStorage.setItem('userData', JSON.stringify(user));
        setIsLoggedIn(true);
        alert("Signed up and logged in!");
    };

    const handleLogout = () => {
        localStorage.removeItem('userLoggedIn');
        localStorage.removeItem('userData');
        setIsLoggedIn(false);
        setShowLogin(true);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                {isLoggedIn ? (
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-4">Welcome Back!</h1>
                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                            onClick={handleLogout}
                        >
                            Log Out
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="flex justify-center mb-4">
                            <button
                                className={`px-4 py-2 rounded-l ${showLogin ? 'bg-[#FA714F] text-white' : 'bg-gray-200'}`}
                                onClick={() => setShowLogin(true)}
                            >
                                Log In
                            </button>
                            <button
                                className={`px-4 py-2 rounded-r ${!showLogin ? 'bg-[#FA714F] text-white' : 'bg-gray-200'}`}
                                onClick={() => setShowLogin(false)}
                            >
                                Sign Up
                            </button>
                        </div>

                        {showLogin ? (
                            <div>
                                <h2 className="text-xl font-semibold mb-4">Log In</h2>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full mb-2 px-3 py-2 border border-gray-300 rounded"
                                    value={loginEmail}
                                    onChange={(e) => setLoginEmail(e.target.value)}
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full mb-2 px-3 py-2 border border-gray-300 rounded"
                                    value={loginPassword}
                                    onChange={(e) => setLoginPassword(e.target.value)}
                                />
                                <label className="flex items-center mb-2">
                                    <input type="checkbox" className="mr-2" />
                                    Remember Me
                                </label>
                                <button
                                    className="bg-[#FA714F] text-white w-full py-2 rounded hover:bg-[#f64d23]"
                                    onClick={handleLogin}
                                >
                                    Log In
                                </button>
                            </div>
                        ) : (
                            <div>
                                <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full mb-2 px-3 py-2 border border-gray-300 rounded"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full mb-2 px-3 py-2 border border-gray-300 rounded"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full mb-2 px-3 py-2 border border-gray-300 rounded"
                                    value={signUpEmail}
                                    onChange={(e) => setSignUpEmail(e.target.value)}
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full mb-2 px-3 py-2 border border-gray-300 rounded"
                                    value={signUpPassword}
                                    onChange={(e) => setSignUpPassword(e.target.value)}
                                />
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="w-full mb-4 px-3 py-2 border border-gray-300 rounded"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <button
                                    className="bg-[#FA714F] text-white w-full py-2 rounded hover:bg-[#f64d23]"
                                    onClick={handleSignUp}
                                >
                                    Sign Up
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default Login;
