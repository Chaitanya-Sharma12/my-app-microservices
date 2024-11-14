const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Order = require('./models/Order');

const app = express();
const PORT = process.env.PORT || 8003;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/order', async (req, res) => {
    try {
        const orderData = req.body;
        const order = new Order(orderData);
        await order.save();
        res.status(201).send(order);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

app.get('/orders/:userId', async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId });
        res.send(orders);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Order Service running on port ${PORT}`);
});
