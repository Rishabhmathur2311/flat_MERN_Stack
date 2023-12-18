import Conversation from "../model/Conversation.js";

export const SendMessage=(req, res)=>{
    try {
        console.log(req.body);
        const message=new Conversation(req.body);
        message.save();
        // console.log(message)
        // console.log("a");
        return res.status(200).json(message);
    } catch (error) {
        return res.status(500).json(error);
    }
}

export const GetMessages=async(req, res)=>{
    try {
        let response=await Conversation.find({});
        // console.log(response);
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
    }
}

export const DeleteMessages=async(req, res)=>{
    try {
        let response=await Conversation.deleteMany({});
        // console.log(response);
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
    }
}