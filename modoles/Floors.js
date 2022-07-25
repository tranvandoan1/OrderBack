import mongoose from 'mongoose';

const Floor = new mongoose.Schema({
    name: {
        type: String
    },
    user_id: {
        type: ObjectId,
        ref: "user",
      },
}, { timestamps: true });
module.exports = mongoose.model('floors', Floor);