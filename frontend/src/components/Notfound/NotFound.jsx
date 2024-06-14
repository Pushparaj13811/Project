// src/NotFound.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-700 dark:text-white mb-4">404</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Oops you have landed in wrong place</p>
                <button
                    onClick={goHome}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Go Home
                </button>
            </div>
        </div>
    );
}

export default NotFound;
