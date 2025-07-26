const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  supplierId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Material' },
      quantity: Number,
      priceAtPurchase: Number,
    },
  ],

  totalAmount: Number,
  status: {
    type: String,
    enum: ['pending', 'accepted', 'in_transit', 'delivered', 'cancelled'],
    default: 'pending',
  },

  deliveryAddress: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);
