import { Box,
Button,
Text
} from "@chakra-ui/react";
import React from "react";
import { NavLink, useParams, Link } from "react-router-dom";
import { GetSingleFlat } from "./services/Api";
import { useState, useEffect } from "react";

const SingleFlat=()=>{

    const [response, setResponse]=useState([]);

    const id=useParams();

    const GetSingleProductDetails=async()=>{
        const a=await GetSingleFlat(id);
        setResponse(await GetSingleFlat(id));
        console.log(response)
        return response;
    }

    useEffect(()=>{
        GetSingleProductDetails();
    }, [])

    return (
        <Text>
            {response.flat}
            {response.city}
            {response.state}
            {response.state}
            {response.features}
            {response.reuirements}
            <Link component={Link} to={`/chatOwner/${response._id}`} state={response}> 
                <Button>
                    Chat With Owner
                </Button>
            </Link>
        </Text>
    );
}

export default SingleFlat;