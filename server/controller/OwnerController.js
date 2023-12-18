import Owner from "../model/Owner.js";

export const AddOwner=async(req, res)=>{
    try {
        let exist=await Owner.findOne({email: req.body.email});
        let detail=new Owner(req.body);
        if(exist){
            return res.status(200).json("User already exists");
        }
        detail.save();
        return json.status(200).json(detail);
    } catch (error) {
        return res.status(500).json(error);
    }
}

export const GetOwner=async(req, res)=>{
    try{
        const detail=await Owner.find({});
        // console.log(detail);
        return res.status(200).json(detail);
    } catch(error){
        return res.status(500).json(error);
    }
}

export const GetSingleFlat=async(req, res)=>{
    try {
        // console.log(req.params.id)
        const detail=await Owner.findById(req.params.id);
        // console.log(detail);
        return res.status(200).json(detail);
    } catch (error) {
        return res.status(500).json(error);
    }
}

export const CityFilter=async(req, res)=>{
    try {
        // console.log(req.params.id)
        console.log(req.body);
        const detail=await Owner.find({city: req.body});
        console.log(detail);
        return res.status(200).json(detail);
    } catch (error) {
        return res.status(500).json(error);
    }
}

export const StateFilter=async(req, res)=>{
    try {
        // console.log(req.params.id)
        console.log(req.body.c);
        const detail=await Owner.find({state: req.body.c});
        console.log(detail);
        return res.status(200).json(detail);
    } catch (error) {
        return res.status(500).json(error);
    }
}

export const SubmitLoginOwner=async(req, res)=>{
    try {
        const detail=await Owner.findOne({email: req.body.email, password: req.body.password});
        // console.log(detail);
        return res.status(200).json(detail);
    } catch (error) {
        return res.status(500).json(error);
    }
}