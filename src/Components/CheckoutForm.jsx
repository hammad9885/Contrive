import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Button from './button/Button';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error(error);
      alert(error.message);
    } else {
      console.log('PaymentMethod:', paymentMethod);
      alert('Payment successful!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block font-medium mb-1">Card Details</label>
      <div className="border p-4 rounded">
        <CardElement options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': { color: '#aab7c4' },
            },
            invalid: { color: '#9e2146' },
          },
        }} />
      </div>

    </form>
  );
};

export default CheckoutForm;
