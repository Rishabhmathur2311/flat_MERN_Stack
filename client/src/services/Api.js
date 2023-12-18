import axios from "axios";

const url='http://localhost:8000';

export const AddBuyer=async(data)=>{
    try {
        return await axios.post(`${url}/addBuyerData`, data);
    } catch (error) {
        console.log(error);
    }
}

export const AddOwner=async(data)=>{
    try {
        console.log(data);
        return await axios.post(`${url}/addOwnerData`, data);
    } catch (error) {
        console.log(error);
    }
}

export const GetOwner=async()=>{
    try {
        let response=await axios.get(`${url}/getOwnerData`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const GetSingleFlat=async(id)=>{
    try {
        console.log(`${url}/singleFlatData/${id.id}`)
        let response=await axios.get(`${url}/singleFlatData/${id.id}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const SendMessage=async(data)=>{
    try {
        console.log(data)
        return await axios.post(`${url}/conversationSet`, data);

    } catch (error) {
        console.log(error);
    }
}

export const SubmitLogIn=async(data)=>{
    try {
        console.log(data);
        return await axios.post(`${url}/logInOwner`, data);
    } catch (error) {
        console.log(error);
    }
}

export const SubmitLogInBuyer=async(data)=>{
    try {
        console.log(data);
        return await axios.post(`${url}/logInBuyer`, data);
    } catch (error) {
        console.log(error);
    }
}

export const GetMessages=async()=>{
    try {
        let response= await axios.get(`${url}/getMessageData`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const GetBuyer=async()=>{
    try {
        let response= await axios.get(`${url}/getBuyers`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const CityFilter=async(data)=>{
    try {
        let response= await axios.post(`${url}/cityFilter`, data);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const StateFilter=async(data)=>{
    try {
        let response= await axios.post(`${url}/stateFilter`, data);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const DeleteMessages=async()=>{
    try {
        return await axios.post(`${url}/deleteMessageData`);
        
    } catch (error) {
        console.log(error);
    }
}

