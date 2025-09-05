import React, { useEffect, useState } from 'react';

function UserProfile() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const data = localStorage.getItem('userData');
        if (data) {
            setUserData(JSON.parse(data));
        }
    }, []);

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 mt-10">
            <h2 className="text-2xl font-bold text-center">User Profile</h2>
            {userData ? (
                <div>
                    <p><strong>Name:</strong> {userData.name}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                </div>
            ) : (
                <p>No user data found. Please log in or sign up.</p>
            )}
        </div>
    );
}

export default UserProfile;
