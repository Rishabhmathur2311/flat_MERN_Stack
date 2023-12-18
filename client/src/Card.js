import React from "react";
import {Link, NavLink} from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter,
Box,
Image,
Stack,
Heading,
Text,
Divider,
Button,
ButtonGroup
} from '@chakra-ui/react'
import ModalCard from "./modalCard.js";

const CardComp=(prop)=>{
    // console.log(prop)
    const obj=prop.prop;
    return (
            <Card maxW='xs'
            // marginLeft="4%"
            // marginTop="3%"
            // marginRight="3%"
            textAlign="center"
            objectFit="contain"
            >
  <CardBody>
    <Image
      src={obj.image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{obj.flat}</Heading>
      <Heading size='sm'>{obj.city}, {obj.state}</Heading>
      {/* <Text noOfLines={[1, 2, 3]}>
        {obj.features}
      </Text> */}
      <Text color='blue.600' fontSize='2xl'>
        ${obj.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2' objectFit="contain">
        {/* <NavLink to={`/singleFlat/${obj._id}`}>
            <Button variant='solid' colorScheme='blue'
            onClick={modal}
            >
            Know More
            </Button>
        </NavLink> */}
        <ModalCard obj={obj}/>
        <Link component={Link} to={`/chatOwner/${obj._id}`} state={obj}>
      <Button variant='ghost' colorScheme='blue' objectFit="contain">
        Chat with Owner
      </Button>
      </Link>
    </ButtonGroup>
  </CardFooter>
</Card>
    );
}

export default CardComp;