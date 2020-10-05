import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
const StripeCheckoutButton=({price})=>{
const priceForStripe=price*100;
const publishableKey='pk_test_51HYvvrB9Pkw3eQ0jCmSwvf7ohXkZuj3mWzNLJ9Zdm02izIHCMcAMV6uTiTiPt6i76dNn7ic8c6Oe8JRfNCflGmAq00p185MJFI'
const onToken=token=>{
    console.log(token);
    alert('Payment Succesful')
}
return(
    <StripeCheckout
label='Pay Now'
name='neeraj corp'
billingAddress
shippingAddressimage='https://svgshare.com/i/CUz.svg'
description={'your total price{price}'}    
amount={priceForStripe}
panelLabel='pay now'
token={onToken}
stripeKey={publishableKey}
/>
);
}
export default StripeCheckoutButton;