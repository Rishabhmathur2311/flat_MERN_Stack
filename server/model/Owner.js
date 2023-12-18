import mongoose from "mongoose";

const OwnerSchema=new mongoose.Schema({
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

    mobile:{
        type: String
    },

    flat:{
        type: String
    },

    street:{
        type: String
    },

    city:{
        type: String
    },

    state:{
        type: String
    },

    features:{
        type: String
    },


    requirements:{
        type: String
    },

    image:{
        type: String
    },

    profile:{
        type: String
    },

    // veg:{
    //     type: String
    // },

    // family:{
    //     type: String
    // },
}, {
    timestamps: true
})

const Owner=mongoose.model('Owner', OwnerSchema);

export default Owner;