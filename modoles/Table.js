import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;

const Table = new mongoose.Schema({
    name: {
        type: String,
    },
    floor_id: {
        type: ObjectId,
        ref: 'floors',
    }
}, { timestamps: true });
module.exports = mongoose.model('table', Table);