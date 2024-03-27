import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from '@stripe/react-stripe-js';
import { paymentUrl } from '../../../urls/payment';

const stripePromise = loadStripe(
  'pk_test_51OsjhaSF6WDxp41UgCqoTMrbpVfqX2XhdpKMxLedRCv3STGjxlWfGoF88tiHh5GjTL0aR8CxuH0HKrGapRH81A5A00bkNfK0tK'
);

const Payment = ({ price, cartlength }) => {
  const [clientSecret, setClientSecret] = useState('');
  console.log(price);
  useEffect(() => {
    const fetchClientSecret = async () => {
      axios
        .post(paymentUrl, {
          price: price,
        })
        .then((response) => {
          setClientSecret(response.data.clientSecret);
          if(response.data.msg === 'success'){

          }
        })
        .catch((error) => {
          // Handle errors here
          console.error('Error fetching client secret:', error);
        });
    };
    if (cartlength > 0) fetchClientSecret();
  }, [price]); // Add 'price' to dependency array to re-fetch when 'price' changes

  const options = { clientSecret };

  return (
    <div id='checkout'>
      {clientSecret && (
        <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      )}
    </div>
  );
};

export default Payment;
