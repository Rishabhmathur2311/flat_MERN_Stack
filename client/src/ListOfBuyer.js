import { Card, CardHeader, CardBody, CardFooter,
    Box,
    Image,
    Stack,
    Heading,
    Text,
    Divider,
    Button,
    ButtonGroup } from "@chakra-ui/react";
import React from "react";
import { NavLink, Link } from "react-router-dom";
import {ChatIcon, ArrowRightIcon} from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/react";

const ListOfBuyers=(prop)=>{
    const obj=prop.prop;
    return (
        <Card maxW='xs' margin="10%" textAlign="center" marginBottom="0">
          <Link component={Link} to={`/chatWithBuyer/${obj._id}`} state={obj}>
  <CardBody>
    <Avatar bg='#2B6CB0' size="xl" src={obj.profile}/>
    <Stack mt='6' spacing='3'>
      <Heading size='xl' textAlign="center" >{obj.name}</Heading>
      
      <Text color='blue.600' fontSize='2xl' >
        ${obj.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
  
        <Button display="inline-block"
            variant="ghost"
            colorScheme="blue"
            textAlign="center"
            marginLeft="15%"
            >
               Chat With Buyer <ArrowRightIcon />
        </Button>
    
  </CardFooter>
  </Link>
</Card>
    );
}

export default ListOfBuyers;