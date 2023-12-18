import { Box } from "@chakra-ui/react";
import React, { useContext } from "react";
import MainPage from "../../MainPage";
import { BuyerContext } from "../../context/BuyerContext";
import OwnerStart from "./OwnerStart";


const HeadPage=()=>{

    const {logInPerson,owner}=useContext(BuyerContext);

    return (
        <Box>
            {console.log(logInPerson)}
            {(Object.keys(owner).length!==0) || (Object.keys(logInPerson).length!==0) ? <MainPage /> : <OwnerStart />}
        </Box>
    );
}

export default HeadPage;