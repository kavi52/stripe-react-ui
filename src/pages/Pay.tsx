import axios from 'axios'
import React from 'react'
import StripeCheckout from 'react-stripe-checkout'


const KEY = 'pk_test_51Og8UiSCVFUSajdb2MlfXv3O1A5x8AZteh3kr4D8Sy2nsFdF1W7whFDZoH8coVCvhumtWSzVAmLTdBpU6iRok9QB00GC5Lg60J'

const STRIPE_CHECKOUT_URL = 'http://localhost:5002/api/checkout/payment'

const Pay = () => {

    const onToken = async (token: any) => {
        const res = await axios.post(STRIPE_CHECKOUT_URL, {
            tokenId: token?.id,
            amount: 20000
        })
        console.log(res.data);
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}>
            <StripeCheckout
                name='Kavita Shop'
                billingAddress
                shippingAddress
                description='You will pay the total'
                amount={20000} //it is 200$ but it's work in cents
                token={onToken}
                stripeKey={KEY}
            />
        </div>
    )
}

export default Pay