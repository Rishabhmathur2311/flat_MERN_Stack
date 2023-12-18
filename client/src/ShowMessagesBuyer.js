import React, { useContext } from "react";
import {BuyerContext} from "./context/BuyerContext.js";
import { Box, Text, Tooltip } from "@chakra-ui/react";
import { FormatDate } from "./MessageDate.js";



const ShowMessagesBuyer=(prop)=>{

    const {logInPerson, owner}=useContext(BuyerContext);

    const obj=prop.prop;

    return (
        // <Box>
        // {obj.receiverName===logInPerson.name?
        // <Box background="blue"> 
        //     {obj.message}
        // </Box>
        // :
        // <Box background="red">
        //     {obj.message}
        // </Box>}
        // </Box>

        <Box>
        {obj.receiverName===logInPerson.name?
        // <Text background="blue"> 
        //     {obj.message}
        // </Text>
        <Box
            borderRadius="12px"
            p="10px"
            backgroundColor={"#E2E8F0"}
            maxWidth="80%"
            margin="10px 0"
            marginLeft="1.5%"
            display="inline-block"
            position="relative"
        >

            <Tooltip label={<FormatDate date={obj.createdAt}/>} aria-label={obj.createdAt} closeDelay={500} hasArrow bg="#CBD5E0" color="black" borderRadius="2px">
            {obj.message}
            </Tooltip>

            {/* <Text marginBottom="0">{obj.message}</Text>
            <Text fontSize= "7px" color="#919191" marginTop= "0" wordBreak="keep-all" marginBottom="0" marginLeft="80%" minWidth="120px">
            <FormatDate date={obj.createdAt}/>
            </Text> */}
        </Box>
        :
        <Text 
        display="flex"
        // justifyContent="flex-end"
        marginLeft="auto"
        width="fit-content"
        wordBreak="break-word"
        borderRadius="12px"
        marginTop="10px"
        marginBottom="10px"
        marginRight="1.5%"
        p="10px"
        backgroundColor={"#dcf8c6"}
        // maxWidth="80%"
        // margin="10px 0"
        >
            <Tooltip label={<FormatDate date={obj.createdAt}/>} aria-label={obj.createdAt} closeDelay={500} hasArrow bg="#CBD5E0" color="black" borderRadius="2px">
            {obj.message}
            </Tooltip>
        </Text>}
        </Box>
    );
}

export default ShowMessagesBuyer;