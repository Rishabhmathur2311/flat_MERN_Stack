import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
    Box,
    Divider,
    AbsoluteCenter,
    Heading,
    Center
  } from '@chakra-ui/react'
import { Link } from "react-router-dom";

function ModalCard(obj) {
    console.log(obj)
    const prop=obj.obj;
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Button onClick={onOpen} objectFit="contain">Know More</Button>
  
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} objectFit="contain">
          <ModalOverlay />
          <ModalContent>
            <Text  textAlign="center" fontSize='5xl' >{prop.flat}</Text>
            <Text textAlign="center" fontSize='2xl'> 
                {prop.city}, {prop.state}
            </Text>
            <ModalCloseButton />
            <Box position='relative' padding='10'>
            <Divider />
            <AbsoluteCenter bg='white' px='4'>
            <Text>
                Features
            </Text>
            </AbsoluteCenter>
            </Box>
            
            <ModalBody pb={6}>
              {prop.features}
            </ModalBody>
            <Box position='relative' padding='10'>
            <Divider />
            <AbsoluteCenter bg='white' px='4'>
            <Text>
                Requirements
            </Text>
            </AbsoluteCenter>
            </Box>
            <ModalBody>
                {prop.requirements}
            </ModalBody>

            <Text color='blue.600' fontSize='2xl' marginLeft="6%">
            Price: ${prop.price}
            </Text>
  
            <ModalFooter>
            <Link component={Link} to={`/chatOwner/${prop._id}`} state={prop}>
              <Button colorScheme='blue' mr={3}>
                Chat with Owner
              </Button>
            </Link>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default ModalCard;