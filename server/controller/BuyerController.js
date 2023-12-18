import Buyer from "../model/Buyer.js";

export const AddBuyer=async(req, res)=>{
    try {
        let exist=await Buyer.findOne({email: req.body.email});
        let detail=new Buyer(req.body);
        console.log(detail);
        if(exist){
            return res.status(200).json("User already exists");
        }
        detail.save();
        return json.status(200).json(detail);
    } catch (error) {
        return res.status(500).json(error);
    }
}

export const SubmitLoginBuyer=async(req, res)=>{
    try {
        const detail=await Buyer.findOne({email: req.body.email, password: req.body.password});
        console.log(detail);
        return res.status(200).json(detail);
    } catch (error) {
        return res.status(500).json(error);
    }
}

export const GetBuyer=async(req, res)=>{
    try {
        const detail=await Buyer.find({});
        return res.status(200).json(detail);
    } catch (error) {
        console.log(error);
    }
}