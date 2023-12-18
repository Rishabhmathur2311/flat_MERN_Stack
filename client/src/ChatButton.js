import React, { useContext } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { BuyerContext } from "./context/BuyerContext";
import { NavLink } from "react-router-dom";
import {ArrowRightIcon} from "@chakra-ui/icons";

const ChatButton=()=>{
    const {owner}=useContext(BuyerContext);
    return (
        <Text
        textAlign="center"
        >
            <NavLink to={`/chatForOwner/${owner._id}`}>
            
            <Button variant="ghost"
            
            color="#3182CE"
            >
            Chat with Buyers
            <ArrowRightIcon />
            </Button>
            </NavLink>
        </Text>
    );
}

export default ChatButton;