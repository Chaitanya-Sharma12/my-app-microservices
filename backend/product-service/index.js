const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Product = require('./models/Product');

const app = express();
const PORT = process.env.PORT || 8002;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/products', async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

app.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.send(products);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

app.delete('/products/:id', async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.send('Product deleted');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Product Service running on port ${PORT}`);
});
