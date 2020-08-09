import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import path from 'path'
import Stripe from 'stripe'

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2020-03-02',
})

const PORT = process.env.PORT || 5000

const app: Application = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')))
    app.get('*', (req: Request, res: Response) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    })
}

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
    console.log('Press CTRL-C to stop\n')
})

type PaymentRequestBody = {
    amount: number,
    token: {
        id: string
    }
}

app.post('/payment', (req: Request<{}, {}, PaymentRequestBody>, res: Response) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'INR'
    }

    stripe.charges.create(body)
        .then(stripeRes => {
            console.log(stripeRes)
            res.status(200).send({ success: stripeRes })
        })
        .catch(stripeErr => {
            console.log(stripeErr)
            res.status(500).send({ error: stripeErr })
        })
})

