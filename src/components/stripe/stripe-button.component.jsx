import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HuatsGQcBe07fo201eb1jLDO4J1Tdg7KWU9yGbCFfJNipwPvO20yOnMdX4Uqd9D3vB1MEY0vEF5JQyQVYeycFSE00P8uducdq'

    // onToken = token => {
    //     console.log(token);
    //     alert('Payment Succesful');
    // }

    return (
         <StripeCheckout 
            label = 'pay Now'
            name = 'CRWN CLOTHING LTD.'
            billingaddress
            shippingaddress
           //image = '%PUBLIC_URL%/favicon.ico'
            description = {`Your total is $${price}`}
            amount = {priceForStripe}
            panellabel = 'Pay Now'
            // token = {onToken}
            stripeKey = {publishableKey} />
    )
}

export default StripeCheckoutButton;