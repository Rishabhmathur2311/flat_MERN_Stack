import { Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Box
    } from "@chakra-ui/react";
    import SignUp from "./SignUp.js";
    import BuyerLogIn from "./BuyerLogin.js";

    
    const SignUpStart=()=>{
        
        return (
            <Box
            width="100vw"
            backgroundColor="#F7FAFC"
            >
            <Tabs isFitted
             maxWidth="55%"
             marginLeft="22%"
             paddingTop="4%"
            >
            <TabList mb='1em'>
                <Tab>Log In</Tab>
                <Tab>Sign Up</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                <BuyerLogIn />
                </TabPanel>
                <TabPanel>
                <SignUp />
                </TabPanel>
            </TabPanels>
            </Tabs>
            </Box>
        );
    }
    
    export default SignUpStart;