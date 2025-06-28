import API from '../lib/axios';

const PaymentButton = ({ amount, userId }) => {
  const handlePayment = async () => {
    const { data } = await API.post('/payment/initiate', { amount, userId });

    const options = {
      key: 'your_razorpay_key_id',
      amount: amount * 100,
      currency: 'INR',
      order_id: data.orderId,
      handler: async function (response) {
        alert('Payment Success!');
        // Optionally: call API to verify payment and update DB
      },
      theme: { color: '#3399cc' },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <button onClick={handlePayment} className="bg-green-600 text-white px-4 py-2 rounded">
      Pay ₹{amount}
    </button>
  );
};

export default PaymentButton;
