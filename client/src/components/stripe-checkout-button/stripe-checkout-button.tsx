import React from 'react'
import axios from 'axios'
import StripeCheckout, { Token } from 'react-stripe-checkout'

type StripeCheckoutButtonProps = {
    price: number
}

const StripeCheckoutButton = ({ price }: StripeCheckoutButtonProps) => {

    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51H9TzAIBCK5SdsgKA9KjlcoAlZ0brByReiPX4fuVmhe4lr2CMzfV4KbFFdLC48GStZtg9y28SS5GOnKsWZ8HBrTf00MCc54e0O'

    const onToken = async (token: Token) => {

        console.log(token)

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('payment', { amount: priceForStripe, token: token }, config)
            alert(`Payment Successful : ${res.status}`)
        } catch (error) {
            console.log('Payment error: ', error)
            alert('There was an issue with your payment. Please sure you use the provided credit card.')
        }
    }

    const rupeeSymbol = new Intl.NumberFormat('en-IN', {
        currency: 'INR',
        style: 'currency'
    }).format(price)

    return (
        <StripeCheckout
            label='Pay Now'
            name='E-Commerce POC'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            currency='INR'
            description={`Your total is ${rupeeSymbol}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton