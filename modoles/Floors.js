import mongoose from 'mongoose';

const Floor = new mongoose.Schema({
    name: {
        type: String
    }
}, { timestamps: true });
module.exports = mongoose.model('floors', Floor);