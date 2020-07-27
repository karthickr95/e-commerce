import React from 'react'
import StripeCheckout, { Token } from 'react-stripe-checkout'

type StripeCheckoutButtonProps = {
    price: number
}

const StripeCheckoutButton = ({ price }: StripeCheckoutButtonProps) => {

    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51H9TzAIBCK5SdsgKA9KjlcoAlZ0brByReiPX4fuVmhe4lr2CMzfV4KbFFdLC48GStZtg9y28SS5GOnKsWZ8HBrTf00MCc54e0O'

    const onToken = (token: Token) => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='E-Commerce POC'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            currency='INR'
            description={`Your total is &#x20B9; ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton