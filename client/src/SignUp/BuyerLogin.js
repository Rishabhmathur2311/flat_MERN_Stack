import React, { useContext } from "react";
import { 
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    VStack,
    Button,
    Box,
    Textarea,
    InputGroup,
    InputLeftAddon,
    Stack,
    CheckboxGroup,
    Checkbox,
    Avatar,
    InputLeftElement,
    Divider,
    AbsoluteCenter,
    InputRightElement    
} from "@chakra-ui/react";
import { BuyerContext } from "../context/BuyerContext";
import { SubmitLogInBuyer } from "../services/Api";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const OwnerLogin=()=>{

    const [email, setEmail]=useState("guest_buyer@abc.com");
    const [password,setPassword]=useState("123");

    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    const {logInPerson, setLogInPerson}=useContext(BuyerContext);

    const PostSignUp=async()=>{
        let detail={
            email,
            password,
        }
        let response=await SubmitLogInBuyer(detail);
        setLogInPerson(response.data);
        console.log(logInPerson);
    }

    return(
        <VStack height="80vh">
            <Avatar
            bg='#2B6CB0' 
            marginTop="1%"
            size="2xl" />
            <FormControl width="60%">
            <FormLabel>
                Email
            </FormLabel>
            <Input placeholder="Enter your Email"
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            bg="#fff"
            />
        </FormControl>
        <FormControl width="60%">
            <FormLabel>
                Password
            </FormLabel>
            <InputGroup size='md'>
            <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Enter password'
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
              bg="#fff" 
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <NavLink to="/mainPage">
        <Button
        onClick={PostSignUp}
        >LogIn</Button>
        </NavLink>
        </VStack>
    );
}

export default OwnerLogin;