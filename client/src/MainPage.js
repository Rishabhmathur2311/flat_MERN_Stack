import React, { useContext, useEffect, useState } from "react";
import { CityFilter, GetOwner, StateFilter } from "./services/Api";
import { Box, Button, Center, Divider, AbsoluteCenter, FormControl, FormLabel, Heading, Input, InputGroup, InputRightAddon, InputRightElement, Text } from "@chakra-ui/react";
import CardComp from "./Card";
import { BuyerContext } from "./context/BuyerContext";
import { NavLink } from "react-router-dom";
import {SearchIcon} from '@chakra-ui/icons';
import ChatButton from "./ChatButton";


const MainPage=()=>{

    const [response, setResponse]=useState([]);
    const [city, setCity]=useState("");
    const [state, setState]=useState("");

    const {logInPerson, owner}=useContext(BuyerContext);

    const GetOwnerFunction=async()=>{
        const a=await GetOwner();
        setResponse(a);
        return response;
    }

    const submitCity=async()=>{
        const b={
            c: city, 
        }
        const a=await CityFilter(b);
        setResponse(a);
        return a;
    }

    const submitState=async()=>{
        const b={
            c: state, 
        }
        const a=await StateFilter(b);
        setResponse(a);
        return a;
    }

    useEffect(()=>{
        GetOwnerFunction();
        console.log(response)
    }, [])

    return (
        <Box backgroundColor="#F7FAFC">
            <Box>
                <Text fontFamily="cursive" fontSize="6xl" textAlign="center" paddingBottom="2%" color="#2B6CB0">
                    Welcome {owner.name}{logInPerson.name}
                </Text>
                <ChatButton />
            </Box>
            <Box position='relative' padding='10'>
            <Divider />
            <AbsoluteCenter bg='#F7FAFC' px='4'>
            <Text fontFamily="cursive"
            fontSize='2xl'
            color="#2B6CB0"
            >
                Filters
            </Text>
            </AbsoluteCenter>
            </Box>
            
            <Text textAlign="center">

            <Text display="inline-block">
            <InputGroup
            marginRight="5%"
            backgroundColor="#F7FAFC"
            >
                <Input 
                placeholder="Enter City"
                onChange={(e)=>setCity(e.target.value)}
                variant="flushed"
                borderRadius="15px"
                paddingLeft="4%"
                backgroundColor="#fff"
                />
                <InputRightElement variant="ghost" children={<Button
                rounded='md'
                variant="link"
                // _hover={{ bg: '#2B6CB0' }}
                onClick={submitCity}
                >
                <SearchIcon />
                </Button>}
                
                />
            </InputGroup>
            </Text>
            
            <Text display="inline-block">
            <InputGroup
            margin="5%"
            marginLeft="20%"
            backgroundColor="#F7FAFC"
            >
                <Input 
                placeholder="Enter State"
                onChange={(e)=>setState(e.target.value)}
                variant="flushed"
                backgroundColor="#fff"
                borderRadius="15px"
                paddingLeft="4%"
                />
                <InputRightElement variant="ghost" children={<Button
                rounded='md'
                variant="link"
                // _hover={{ bg: '#2B6CB0' }}
                onClick={submitState}
                >
                <SearchIcon />
                </Button>}
                
                />
            </InputGroup>
            </Text>

            </Text>
            <Box position='relative' padding='10'>
            <Divider />
            <AbsoluteCenter bg='#F7FAFC' px='4'>
            <Text fontFamily="cursive"
            fontSize='2xl'
            color="#2B6CB0"
            >
                Find Your dream Flat
            </Text>
            </AbsoluteCenter>
            </Box>
            <Box
              display="grid"
              gridTemplateColumns="repeat(3, 1fr)"
              gridGap="5%"
              backgroundColor="#F7FAFC"
              margin="2%"
            >
            {response.map((message)=>
                <CardComp prop={message}
                />
            )}
            </Box>
        </Box>
    );
}

export default MainPage;