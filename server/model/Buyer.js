import mongoose from "mongoose";

const BuyerSchema=new mongoose.Schema({
    name:{
        type: String,
    },

    email: {
        type: String
    },

    password:{
        type: String
    },

    price:{
        type: String
    },

    profile:{
        type: String
    }
}, {
    timestamps: true
})

const Buyer=mongoose.model('Buyer', BuyerSchema);

export default Buyer;