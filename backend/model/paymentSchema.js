const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    user:{
        type:Array,
        default:[]
    },
    data:{
        type:Array,
        default:[]
    },
    product:{
        type:Array,
        default:[]
    }

})

const Payment = mongoose.model("PAYMENT",paymentSchema);

module.exports = Payment