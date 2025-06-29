import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StripeCheckoutButton from '../components/StripeCheckoutButton';

const Dashboard = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) navigate('/');
    }, [navigate, token]);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-semibold mb-4">
                    Welcome, {user?.name || 'User'} 👋
                </h1>
                <button
                    onClick={() => {
                        localStorage.clear();
                        window.location.href = '/';
                    }}
                    className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                >
                    Logout
                </button>

                <p className="mb-6">You are logged in with: <strong>{user?.email}</strong></p>

                <h2 className="text-xl font-medium mb-2">Make a Payment</h2>
                <StripeCheckoutButton amount={500} userId={user?._id} />
            </div>
        </div>
    );
};

export default Dashboard;
