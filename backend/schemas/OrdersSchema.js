const {Schema} = require("mongoose");

const OrdersSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    name: String,
    qty: Number,
    price: Number,
    mode: String,
    status: {
        type: String,
        default: "Executed"
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
}); 

module.exports = {OrdersSchema};