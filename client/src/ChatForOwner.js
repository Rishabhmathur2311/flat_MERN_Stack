import { Box, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import {BuyerContext} from "./context/BuyerContext.js";
import { GetBuyer, GetMessages } from "./services/Api.js";
import ListOfBuyers from "./ListOfBuyer.js";
// import { GetBuyers } from "./services/Api.js";


const ChatForOwner=()=>{

    const {owner}=useContext(BuyerContext);
    const [response, setResponse]=useState([]);


    const getBuyersData=async()=>{
        let detail=await GetBuyer();
        // let r=detail.filter((curElem)=>{
        //     return curElem.name===owner.name;
        // });
        setResponse(detail);
        console.log(detail);
        return response;
    }

    useEffect(()=>{
        getBuyersData();
    }, [])
    return (
        <Box
        display="grid"
        gridTemplateColumns="repeat(2, 1fr)"
        gridGap="5%"
        backgroundColor="#F7FAFC"
        minHeight="145vh"
        >
           {response.map((message)=>
                <ListOfBuyers prop={message}/>
            )}
        </Box>
    );
}

export default ChatForOwner;