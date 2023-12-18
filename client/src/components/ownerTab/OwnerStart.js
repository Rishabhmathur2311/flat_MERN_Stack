import React from "react";
import { Tabs,
TabList,
Tab,
TabPanels,
TabPanel,
Box
} from "@chakra-ui/react";
import Owner from "./Owner";
import OwnerLogin from "./OwnerLogIn";

const OwnerStart=()=>{
    
    return (
        <Box
        width="100vw" height="265vh"
        backgroundColor="#F7FAFC"
        >
        <Tabs isFitted 
        maxWidth="55%"
        marginLeft="22%"
        >
            
        <TabList 
        mb='1em'
        paddingTop="3%"
        >
            <Tab>Log In</Tab>
            <Tab>Sign up</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
            <OwnerLogin />
            </TabPanel>
            <TabPanel>
            <Owner backgroundColor="#F7FAFC"/>
            </TabPanel>
        </TabPanels>
        </Tabs>
        </Box>
    );
}

export default OwnerStart;