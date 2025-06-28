import PaymentButton from '../components/PaymentButton';

const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/login';
    };

    return (
        <div className="p-4">
            <h1 className="text-xl mb-4">Welcome, {user?.name}</h1>
            <PaymentButton amount={499} userId={user._id} />
            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
                Logout
            </button>

        </div>
    );
};

export default Dashboard;
