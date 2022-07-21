import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;
// const d = new Date();
// const date =
//   `${d.getDate()}`.length == 1 ? `0${d.getDate()}` : `0+${d.getDate()}`;
// const month =
//   `${d.getMonth() + 1}`.length == 1
//     ? `0${d.getMonth() + 1}`
//     : `0+${d.getMonth() + 1}`;

const Order = new mongoose.Schema(
  {
    customer_name: {
      type: String,
    },
    id_table: {
      type: ObjectId,
      ref: "tables",
    },
    floor_id: {
      type: ObjectId,
      ref: "floors",
    },
    sum_price: {
      type: Number,
    },
    sale: {
      type: Number,
    },
    bill: {
      type: String,
    },
    user_id:{
      type: ObjectId,
      ref: "users"
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("Order", Order);
