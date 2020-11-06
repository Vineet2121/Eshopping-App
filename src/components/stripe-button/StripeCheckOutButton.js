import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckOutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HkaJ6GmGg558JUfq1Nsc3nAuMM2naIabDZ8O3dPOfwtMlSg37kWlvgU1JcSja31FvYkWQxB6zCqDnDvdEH3oMFe00ouH6v7Iy';

  const onToken = (token) => {
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Avika Apparel'
      billingAddress
      shippingAddress
      image='https://stripe.com/img/documentation/checkout/marketplace.png'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckOutButton;
