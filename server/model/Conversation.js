import mongoose from "mongoose";

const ConversationSchema=new mongoose.Schema({
    senderName:{
        type: String,
    },

    receiverName: {
        type: String
    },

    message:{
        type: String
    },
}, {
    timestamps: true
})

const Conversation=mongoose.model('Conversation', ConversationSchema);

export default Conversation;