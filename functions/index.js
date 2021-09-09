const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51JWs6FCHnHhiw4tMvrwddQEogRdMzPHIKeymlrLJlhrrQQPu5AKK9ICvewWt3GgIIoAss1IrgR2RUIwx6rqwXX8700Dcu7iP0p");

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("payment request received", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-e4a13/us-central1/api
