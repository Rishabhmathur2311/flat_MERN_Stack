import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Intro=()=>{
    return(
        <Box backgroundColor="#F7FAFC" width="100vw" height="100vh">
        <Box textAlign="center" backgroundColor="#F7FAFC" paddingTop="30vh">
            <Text
            fontFamily="cursive"
            fontSize='6xl'
            color="#2B6CB0"
            >
            Welcome to FlatFinder
            </Text>
            <Text
            fontFamily="cursive"
            fontSize='4xl'
            color="#2B6CB0"
            > 
                Who Are you
            </Text>
            <NavLink to="/owner">
                <Button
                marginTop="3%"
                marginLeft="2%"
                fontFamily="cursive"
                colorScheme='blue' variant='outline'
                >
                    Owner
                </Button>
            </NavLink>
            <NavLink to="buyer">
                <Button
                marginTop="3.2%"
                marginLeft="23%"
                fontFamily="cursive"
                colorScheme='blue' variant='outline'
                >
                    Buyer
                </Button>
            </NavLink>
        </Box>
        </Box>
    );
}

export default Intro;