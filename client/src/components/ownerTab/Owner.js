import React, { useContext, useState } from "react";
import { AddOwner } from "../../services/Api";
import { NavLink } from "react-router-dom";
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
  } from '@chakra-ui/react'
import { BuyerContext } from "../../context/BuyerContext";

const Owner=()=>{

    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [mobile,setMobile]=useState("");
    const [price,setPrice]=useState("");
    const [flat, setFlat]=useState("");
    const [street, setStreet]=useState("");
    const [city, setCity]=useState("");
    const [state, setState]=useState("");
    const [features, setFeatures]=useState("");
    const [requirements, setRequirements]=useState("");
    const [veg, setVeg]=useState("");
    const [family, setFamily]=useState("");
    const [image, setImage]=useState("");
    const [profile, setProfile]=useState("");
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    const {logInPerson, setLogInPerson, owner, setOwner}=useContext(BuyerContext);

    const convertToBase64=(e)=>{
        console.log(e);
        var reader=new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload=()=>{
            setImage(reader.result);
            console.log(reader.result);
        };

        reader.onerror=error=>{
            console.log("Error: ",  error)
        };
    }

    const convertToBase64Profile=(e)=>{
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

    const PostSignUp=async()=>{
            console.log(family);
            const details={
                name, 
                email,
                password,
                mobile,
                price,
                flat,
                street,
                city,
                state,
                features,
                requirements,
                image,
                profile
                // veg,
                // family,
            }

            await AddOwner(details);

            // setLogInPerson(details);
            setOwner(details);

            setName("");
            setEmail("");
            setPassword("");
            setMobile("");
            setFlat("");
            setStreet("");
            setCity("");
            setState("");
            setFeatures("");
            setRequirements("");
            setVeg("");
            setFamily("");
    }
      
    return (
        <Box
        height="240vh"
        backgroundColor="#F7FAFC"
        >
        <VStack>
        <Avatar
        bg='#2B6CB0' 
        marginTop="1%"
        size="2xl" />
        <FormControl marginTop="2.5%" >
            <Divider orientation="horizontal"/>
            <AbsoluteCenter bg='#F7FAFC' px='4'>
                Personal Details
            </AbsoluteCenter>
        </FormControl>
        <FormControl width="60%">
            <FormLabel>
                Name
            </FormLabel>
            <Input
            backgroundColor="#fff"
            placeholder="Enter your Name"
            onChange={(e)=>setName(e.target.value)}
            value={name}
            />
        </FormControl>
        <FormControl width="60%">
            <FormLabel>
                Email
            </FormLabel>
            <Input placeholder="Enter your Email"
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            backgroundColor="#fff"
            />
        </FormControl>
        <FormControl width="60%">
            <FormLabel>
                Password
            </FormLabel>
            <InputGroup size='md'>
            <Input
              pr='4.5rem'
              backgroundColor="#fff"
              type={show ? 'text' : 'password'}
              placeholder='Enter password'
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick} colorScheme="blue" variant="outline">
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl width="60%">
            <FormLabel>
                Mobile Number
            </FormLabel>
            <InputGroup>
                <InputLeftAddon children='+91' />
                <Input type='tel' placeholder='phone number' 
                onChange={(e)=>setMobile(e.target.value)}
                value={mobile}
                backgroundColor="#fff"
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
                onChange={convertToBase64Profile}
                />
            </InputGroup>
        </FormControl>
        <FormControl paddingTop="2.5%">
            <Divider orientation="horizontal"/>
            <AbsoluteCenter bg='#F7FAFC' px='4'>
                Flat Details
            </AbsoluteCenter>
        </FormControl>
        <FormControl width="60%">
            <FormLabel>
                Price
            </FormLabel>
            <InputGroup>
                <InputLeftElement
                // pointerEvents='none'
                color='gray.300'
                fontSize='1.2em'
                children='$'
                />
                <Input placeholder="Enter your asking price"
                onChange={(e)=>setPrice(e.target.value)}
                value={price}
                backgroundColor="#fff"
                />
            </InputGroup>
        </FormControl>
        <FormControl width="60%">
            <FormLabel>
                Society Name
            </FormLabel>
            <Input placeholder="Enter your Society name"
            onChange={(e)=>setFlat(e.target.value)}
            value={flat}
            backgroundColor="#fff"
            />
        </FormControl>
        <FormControl width="60%">
            <FormLabel>
                    Street Name
            </FormLabel>
            <Input placeholder="Enter Street name"
            onChange={(e)=>setStreet(e.target.value)}
            value={street}
            backgroundColor="#fff"
            />
        </FormControl>
        <FormControl width="60%">
            <FormLabel>
                    City
            </FormLabel>
            <Input placeholder="Enter your city"
            onChange={(e)=>setCity(e.target.value)}
            value={city}
            backgroundColor="#fff"
            />
        </FormControl>
        <FormControl width="60%">
            <FormLabel >
                    State
            </FormLabel>
            <Input placeholder="Enter your state"
            onChange={(e)=>setState(e.target.value)}
            value={state}
            backgroundColor="#fff"
            />
        </FormControl>

        <FormControl width="60%">
            <FormLabel >
                    Pictures of flat
            </FormLabel>
            <Input type="file"
            onChange={convertToBase64}
            />
        </FormControl>


        <FormControl marginTop="2.5%">
            <Divider orientation="horizontal"/>
            <AbsoluteCenter bg='#F7FAFC' px='4'>
                 Features and Requirements
            </AbsoluteCenter>
        </FormControl>
        <FormControl width="60%">
            <FormLabel>
                Features
            </FormLabel>
            <Textarea placeholder='Enter features of the flat' 
            onChange={(e)=>setFeatures(e.target.value)}
            value={features}
            backgroundColor="#fff"
            />
        </FormControl>
        <FormControl width="60%">
            <FormLabel>
                Requirements
            </FormLabel>
            <Textarea placeholder='Enter Your Requirements' 
            onChange={(e)=>setRequirements(e.target.value)}
            value={requirements}
            backgroundColor="#fff"
            />
        </FormControl>
        <FormControl width="60%">
            <FormLabel>
                Vegeterian/Non-Vegeterian
            </FormLabel>
            <CheckboxGroup colorScheme='green' defaultValue={['Vegeterian', 'Non-Vegeterian']} marginTop="2%">
                <Stack spacing={[1, 5]} direction={['column', 'row']}>
                    <Checkbox value='Vegeterian' onSelect={()=>setVeg("Vegeterian")}>Vegeterian</Checkbox>
                    <Checkbox value='Non-Vegetrian' onSelect={()=>setVeg("Non-Vegeterian")}>Non-Vegetrian</Checkbox>
                </Stack>
            </CheckboxGroup>
            <FormControl width="60%" marginTop="2%">
            <FormLabel>
                Family/Bachelor's
            </FormLabel>
            <CheckboxGroup colorScheme='green' defaultValue={['Family', 'Bachelor']} marginTop="2%">
                <Stack spacing={[1, 5]} direction={['column', 'row']}>
                    <Checkbox value='Family' onSelect={()=>setFamily("Family")}>Family</Checkbox>
                    <Checkbox value='Bachelor' onSelect={()=>setFamily("Bachelor")}>Bachelor</Checkbox>
                    <Checkbox value='Any' onSelect={()=>setFamily("Both Family & Bachelor")}>Both</Checkbox>
                </Stack>
            </CheckboxGroup>
        </FormControl>
        </FormControl>
        <NavLink to="/mainPage">
        <Button
        onClick={PostSignUp}
        colorScheme="blue"
        variant="outline"
        >Register</Button>
        </NavLink>
        </VStack>
        </Box>  
    );
}

export default Owner;