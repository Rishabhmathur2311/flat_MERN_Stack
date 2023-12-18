import { Box,
    Text,
    Input,
    IconButton,
    InputRightElement,
    Button,
    InputGroup,
    InputLeftElement,
    Avatar,
    Heading
    } from "@chakra-ui/react";
    import { CheckIcon } from "@chakra-ui/icons";
    import React, { useState, useContext, useEffect } from "react";
    import { SendMessage } from "./services/Api";
    import { BuyerContext } from "./context/BuyerContext";
    import { Link, useLocation } from "react-router-dom";
    import { GetMessages } from "./services/Api";
    import ShowMessages from "./ShowMessages";
import ShowMessagesBuyer from "./ShowMessagesBuyer";
import { ArrowRightIcon, AttachmentIcon } from "@chakra-ui/icons";
    
    const ChatWithOwner=()=>{
    
        const location = useLocation();
        const propsData = location.state;
        console.log(propsData);
    
    
        const [text, setText]=useState("");
        const [flag, setFlag]=useState(false);
        const {logInPerson}=useContext(BuyerContext);
        const [r, setr]=useState([]);
    
        const SendMessageData=async()=>{
            const b=propsData.name;
            const a=logInPerson.name;
            const response={
                senderName: a,
                receiverName: b,
                message: text,
            }
    
            console.log(logInPerson);
    
            await SendMessage(response);
    
            setFlag(!flag);
    
            setText("");
        }
    
        const getMessagesData=async()=>{
            const b=propsData.name;
            const a=logInPerson.name;
            console.log(b);
            let response=await GetMessages();
            console.log(response);
            let rp=response.filter((curElem)=>{
                return ((curElem.senderName===a && curElem.receiverName===b) || (curElem.senderName===b && curElem.receiverName===a));
        });
            console.log(rp);
            setr(rp);
            return rp;
        }
    
        useEffect(()=>{
            getMessagesData();
    
        }, [flag]);
    
        return (
            // <Box>
            //     <Input variant='outline' placeholder='Outline' 
            //     onChange={(e)=>setText(e.target.value)}
            //     value={text}
            //     />
            //     <IconButton
            //     isRound={true}
            //     variant='solid'
            //     colorScheme='teal'
            //     aria-label='Done'
            //     fontSize='20px'
            //     icon={<CheckIcon />}
            //     onClick={SendMessageData}
            //     />
            //     <Box>
            //         {propsData.name}
            //         {logInPerson.name}
            //         hello
            //     {r.map((message)=>
            //         <ShowMessagesBuyer prop={message}/>
            //     )}
            //     </Box>
            // </Box>

            <Box margin="0">
                <Box padding=".7%"
                margin="0"
                backgroundColor="#EDF2F7"
                >
                    <Avatar
                    bg='#2B6CB0'
                    size="md"
                    display="inline-block"
                    src={propsData.image}
                    ></Avatar>
                    <Heading display="inline-block"
                    marginTop=".8%"
                    marginLeft="1.5%"
                    // size="md"
                    fontSize="150%"
                    >{propsData.name}</Heading>
                    
                </Box>
                <Box
                    overflowY="scroll" 
                    minHeight="87vh"
                    margin="0"
                >
                    
                {r.map((message)=>
                    <ShowMessagesBuyer prop={message}/>
                )}
                </Box>
            
                <Box minHeight="10%">
                <InputGroup width="50%" marginLeft="20%" position="fixed" bottom="0" paddingBottom="1%">
                <InputLeftElement pointerEvents='none'>
                    <AttachmentIcon />
                </InputLeftElement>
                <Input 
                backgroundColor="#fff"
                placeholder="Enter your messages"
                variant="outline"
                onChange={(e)=>setText(e.target.value)}
                value={text}
                borderRadius="16px"
                />
                <InputRightElement variant="ghost" children={<Button
                rounded='sm'
                variant="ghost"
                onClick={SendMessageData}
                >
                <ArrowRightIcon />
                </Button>}
                />
                </InputGroup>
                </Box>

                
            </Box>
        );
    }
    
    export default ChatWithOwner;