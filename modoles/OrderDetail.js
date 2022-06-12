import mongoose from 'mongoose';

const OrderDetail = new mongoose.Schema({
    bill: {
        type: String
    },
    namePro: {
        type: String
    },
    price: {
        type: Number,
        maxlength: 32
    },
    quantity: {
        type: Number
    },
    weight:{
        type:Number
    }
}, { timestamps: true });
module.exports = mongoose.model('orderdetail', OrderDetail);