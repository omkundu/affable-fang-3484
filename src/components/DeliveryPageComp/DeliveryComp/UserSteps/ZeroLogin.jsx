import { Box, Button, FormControl, HStack, Icon, Input, InputGroup, InputRightElement, Link, Stack, Text} from '@chakra-ui/react';
import React from 'react';
import { BsGoogle } from "react-icons/bs";
import axios from "axios"

//For Google Login
// import { GoogleLogin } from '@react-oauth/google';
// import jwt_decode from "jwt-decode";
import { useGoogleLogin } from "@react-oauth/google"
//.....................

function ZeroLogin({ HandleStep }) {

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)


    const HandleGoogleLogin = useGoogleLogin({
        onSuccess: async Resp => {
            const UserData = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo" , {
                headers:{
                    "Authorization": `Bearer ${Resp.access_token}`
                }
            }).catch(err=>{
                console.log(err)
            })

            console.log(UserData)
 
        } 

    })


    return (
        <Stack m="30px auto" direction={["column-reverse", "row"]} w="95%" gap={["0", "10px"]} maxW="1100px">

            <Box w="100%" textAlign={["center", "start"]} borderTop={["1px solid  rgb(237,241,246)", "0"]} pr={["0", "20px", "40px"]} pt={["15px", "0"]}>
                <Text>YOU ALREADY HAVE A PASSWORD</Text>
                <Text fontSize="sm" color="GrayText" py="5px">
                    Please sign in here by entering your email address and your password.
                    By signing in, your account information, including saved addresses,
                    will be available throughout the checkout.
                </Text>

                <Box py="5px">

                    <FormControl isRequired my="10px">
                        <Input placeholder='First name *' borderRadius={0} fontSize="sm" />
                    </FormControl>

                    <InputGroup size='md' my="10px">
                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Enter password'
                            borderRadius={0}
                            fontSize="sm"
                        />
                        <InputRightElement width='4.5rem' >
                            <Button h='1.75rem' size='sm' onClick={handleClick} borderRadius={0}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>

                </Box>

                <Text fontSize="sm" color="GrayText">* required fields</Text>

                <Box py="10px">
                    <Link textDecoration="underline" fontSize="sm" color="GrayText">Did you forget your password?</Link>
                </Box>

                <HStack pt="5px" justify={["center" , "start"]}>
                    <Button background="black" color="white" size="xs" borderRadius={0} px="15px" _hover={{ bg: "gray.500", color: " white" }}>PROCEED WITH LOGIN</Button>
                    <Button background="black" color="white" size="xs" borderRadius={0} px="15px" _hover={{ bg: "gray.500", color: " white" }} onClick={() => HandleGoogleLogin()}><Icon as={BsGoogle} fontSize="15px" /></Button>
                </HStack>
            </Box>


            <Box w="100%" textAlign={["center", "start"]} borderLeft={["0", "1px solid  rgb(237,241,246)"]} pl={["0", "20px", "40px"]} pb={["15px", "0"]}>

                <Text>YOU DO NOT HAVE A PASSWORD YET</Text>
                <Text fontSize="sm" color="GrayText" py="5px">
                    Orders can be placed without a password, too.
                </Text>
                <Box pt="5px">
                    <Button background="black" color="white" size="xs" borderRadius={0} px="15px" _hover={{ bg: "gray.500", color: " white" }} onClick={() => HandleStep(1)}>PROCEED WITHOUT LOGIN</Button>
                </Box>


            </Box>

        </Stack>
    );
}

export default ZeroLogin;