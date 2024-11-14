// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    products: [{ productId: { type: mongoose.Schema.Types.ObjectId }, quantity: Number }],
    totalAmount: { type: Number },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
