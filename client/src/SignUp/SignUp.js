import React, { useState, useContext } from "react";
import { AddBuyer } from "../services/Api";

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    VStack,
    Button,
    Box,
    Avatar,
    InputLeftElement,
    InputGroup,
    InputRightElement,
  } from '@chakra-ui/react'
  import PasswordInput from "../chakraComponents/password";
import { NavLink } from "react-router-dom";
import { useBuyerContext } from "../context/BuyerContext";
import { BuyerContext } from "../context/BuyerContext";

const SignUp=()=>{

    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [price, setPrice]=useState("");
    const [profile, setProfile]=useState("");

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
  

    const {logInPerson, setLogInPerson}=useContext(BuyerContext);

    const PostSignUp=async()=>{
        const openInformation={
            name,
            email,
            password,
            price,
            profile,
        }

        setLogInPerson(openInformation);
        console.log(openInformation);
        console.log(logInPerson);

        await AddBuyer(openInformation)

        setName("");
        setEmail("");
        setPassword("");
        setPrice("");
    }

    const convertToBase64=(e)=>{
      console.log(e);
      var reader=new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=()=>{
          setProfile(reader.result);
          console.log(reader.result);
      };

      reader.onerror=error=>{
          console.log("Error: ",  error)
      };
  }

    const PasswordInput=()=> {
        const [show, setShow] = React.useState(false)
        const handleClick = () => setShow(!show)
      
        return (
          <InputGroup size='md'>
            <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Enter password'
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        )
      }

    return (
    <VStack>
        <Avatar
        bg='#2B6CB0' 
        marginTop="1%"
        marginBottom="1%"
        size="2xl" />
        <FormControl width="60%">
            <FormLabel>
                Name
            </FormLabel>
            <Input placeholder="Enter your Name"
            onChange={(e)=>setName(e.target.value)}
            value={name}
            bg="#fff"
            />
        </FormControl>
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
        <FormControl width="60%">
            <FormLabel>
                Price
            </FormLabel>
            <InputGroup>
                <InputLeftElement
                pointerEvents='none'
                color='gray.300'
                fontSize='1.2em'
                children='$'
                />
                <Input placeholder="Enter your asking price"
                onChange={(e)=>setPrice(e.target.value)}
                value={price}
                bg="#fff"
                />
            </InputGroup>
        </FormControl>

        <FormControl width="60%">
            <FormLabel>
                Profile Picture
            </FormLabel>
            <InputGroup>
                <Input
                type="file"
                onChange={convertToBase64}
                />
            </InputGroup>
        </FormControl>
        
        <NavLink to="/mainPage">
        <Button
        onClick={PostSignUp}
        >SignUp</Button>
        </NavLink>
    </VStack>
    );
}

export default SignUp;