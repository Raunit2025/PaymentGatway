import { loadStripe } from '@stripe/stripe-js';
import API from '../lib/axios';

const stripePromise = loadStripe('pk_test_51RfQ40RAG6bDPqaYK2hLQJCdOyZXozYNpcGkrdE6PTVjMRrpKNj7d2bGUzggdAXVqrirnlDzl1WMUM2TmJuTYANm00UVh63mi6'); 

const StripeCheckoutButton = ({ amount, userId }) => {
  const handleClick = async () => {
    try {
      const res = await API.post('/payment/initiate', { amount, userId });
      window.location.href = res.data.url;
    } catch (err) {
      console.error('Payment failed:', err);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
    >
      Pay ₹{amount}
    </button>
  );
};

export default StripeCheckoutButton;
