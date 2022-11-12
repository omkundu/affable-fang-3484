import { Box, Button, FormControl, HStack, Icon, Img, Input, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { BsFillInfoCircleFill } from "react-icons/bs";
import { BoxIMG1, BoxIMG2 } from "../../../image/PaymentPageIMG"


function OneDelivery({ HandleStep }) {

    const [next, setNext] = useState(true)


    const [userDetails, setUserDetails] = useState({
        slv: "1",
        fname: "",
        lname: "",
        compname: "",
        email: "",
        street: "",
        addressLine2: "",
        pincode: "",
        city: "",
        contery: "",
        mobileNumber: "",
        shipingExpress: "0",
        pkgOption: "0",
        cnOption: '0'
    })

    const HandleUserDetails = (e) => {

        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value
        })
    }


    useEffect(() => {

        let status = () => {
            for (let key in userDetails) {
                if (userDetails[key] === "") return true

            }
            return true
        }

        setNext(status)

        localStorage.setItem("userDetails", JSON.stringify(userDetails))
    }, [userDetails])

    console.log(userDetails)

    return (
        <>
            <Stack m="30px auto" direction={["column", "row"]} w={["95%", "90%"]} gap={["0", "10px"]}>

                <Box w="100%" textAlign="start" borderTop={["1px solid  rgb(237,241,246)", "0"]} pr={["0", "20px", "40px"]} pt={["15px", "0"]}>

                    <Text py="10px" >SHIPPING ADDRESS</Text>
                    <Text py="10px" fontSize="sm" color="GrayText">Please enter your shipping address in the form below.</Text>

                    <RadioGroup defaultValue="1">
                        <HStack>
                            <Radio size='sm' colorScheme='red' value="1" name="slv" onChange={HandleUserDetails}>
                                Ms. *
                            </Radio>

                            <Radio size='sm' colorScheme='red' value="2" name="slv" onChange={HandleUserDetails}>
                                Mrs. *
                            </Radio>

                            <Radio size='sm' colorScheme='red' value="3" name="slv" onChange={HandleUserDetails}>
                                Mr. *
                            </Radio>
                        </HStack>
                    </RadioGroup>

                    <FormControl isRequired my="10px">
                        <Input placeholder='First name *' borderRadius={0} fontSize="sm" name="fname" onChange={HandleUserDetails} />
                    </FormControl>

                    <FormControl isRequired my="10px">
                        <Input placeholder='Last name *' borderRadius={0} fontSize="sm" name="lname" onChange={HandleUserDetails} />
                    </FormControl>

                    <FormControl isRequired my="10px">
                        <Input placeholder='Company *' borderRadius={0} fontSize="sm" name="compname" onChange={HandleUserDetails} />
                    </FormControl>

                    <FormControl isRequired my="10px">
                        <Input placeholder='Email address *' borderRadius={0} fontSize="sm" name="email" onChange={HandleUserDetails} />
                    </FormControl>

                    <FormControl isRequired my="10px">
                        <Input placeholder='Street *' borderRadius={0} fontSize="sm" name="street" onChange={HandleUserDetails} />
                    </FormControl>

                    <FormControl isRequired my="10px">
                        <Input placeholder='Address line 2 *' borderRadius={0} fontSize="sm" name="addressLine2" onChange={HandleUserDetails} />
                    </FormControl>

                    <FormControl isRequired my="10px">
                        <Input placeholder='Postcode *' borderRadius={0} fontSize="sm" name="pincode" onChange={HandleUserDetails} />
                    </FormControl>

                    <FormControl isRequired my="10px">
                        <Input placeholder='City *' borderRadius={0} fontSize="sm" name="city" onChange={HandleUserDetails} />
                    </FormControl>

                    <FormControl isRequired my="10px">
                        <Input placeholder='Malaysia *' borderRadius={0} fontSize="sm" name="contery" onChange={HandleUserDetails} />
                    </FormControl>

                    <FormControl isRequired my="10px">
                        <Input placeholder='Mobile Phone *' borderRadius={0} fontSize="sm" name="mobileNumber" onChange={HandleUserDetails} />
                    </FormControl>

                    <Text fontSize="sm" color="GrayText" my="10px">* required fields</Text>


                    <Box py="10px" textAlign={["center", "left"]}>
                        <Text py="5px" >BILLING ADDRESS</Text>
                        <Text py="5px" fontSize="sm" color="GrayText">If your billing address differs from your shipping address, please click "add billing address".</Text>
                        <Box pt="5px">
                            <Button colorScheme="gray" variant="solid" size="xs" borderRadius={0} px="15px" >ADD BILLING ADDRESS</Button>
                        </Box>
                    </Box>


                </Box>


                <Box w="100%" textAlign="start" borderLeft={["0", "1px solid  rgb(237,241,246)"]} pl={["0", "20px", "40px"]} pb={["15px", "0"]}>

                    <Text py="10px" >SHIPPING METHOD</Text>
                    <Text py="10px" fontSize="sm" color="GrayText">Please select your preferred shipping method.</Text>

                    <Box borderTop="1px solid rgb(237,241,246)" py="10px">
                        <Stack direction="row" align="center" justify="space-between">
                            <Box>
                                <Radio size='sm' colorScheme='red' value="1" name="shipingExpress" onChange={HandleUserDetails}>
                                    <Text letterSpacing="2px" fontWeight="bold" fontSize="md">Express</Text>
                                </Radio>
                                <Icon as={BsFillInfoCircleFill} color="gray.400" m="0 10px" />
                            </Box>
                            <Box>
                                <Text fontSize="sm">
                                    € 20.00
                                </Text>
                            </Box>
                        </Stack>
                        <Text fontSize="sm">2-4 business days delivery time</Text>
                    </Box>


                    <Box borderTop="1px solid rgb(237,241,246)" borderBottom="1px solid rgb(237,241,246)" py="15px">

                        <Text py="5px">PACKAGING OPTIONS</Text>

                        <RadioGroup>
                            <Stack direction={["column", "column", "column", "row"]} justify="space-between">
                                <Stack w="100%" direction={["row", "column", "column", "column"]} justify="space-between">
                                    <Radio size='sm' colorScheme='red' value="1" name="pkgOption" onChange={HandleUserDetails}>
                                        <Box>
                                            <Text letterSpacing="2px" fontWeight="bold" fontSize="md">Mytheresa packaging</Text>
                                            <Text letterSpacing="2px">(Free)</Text>
                                        </Box>
                                    </Radio>
                                    <Img src={BoxIMG1} w={["30%", "50%"]} maxW="130px" alignSelf={["center", "center", "center", "end"]} />
                                </Stack>

                                <Stack w="100%" direction={["row", "column", "column", "column"]} justify="space-between">
                                    <Radio size='sm' colorScheme='red' value="2" name="pkgOption" onChange={HandleUserDetails}>
                                        <Box>
                                            <Text letterSpacing="2px" fontWeight="bold" fontSize="md">Eco packaging</Text>
                                            <Text letterSpacing="2px">(Free)</Text>
                                        </Box>
                                    </Radio>
                                    <Img src={BoxIMG2} w={["30%", "50%"]} maxW="130px" alignSelf={["center", "center", "center", "end"]} />
                                </Stack>
                            </Stack>
                        </RadioGroup>

                    </Box>

                    <Box py="10px">
                        <Text fontWeight="bold">CLIMATE NEUTRAL OPTION</Text>
                        <Stack direction="row" align="center" justify="space-between">
                            <Stack direction="row" align="center">
                                <Radio size='sm' colorScheme='red' value="1" name="cnOption" onChange={HandleUserDetails}>
                                    <Text letterSpacing="2px">Help offset the CO2 emissions of your order <Icon as={BsFillInfoCircleFill} position="relative" top="4px" color="gray.400" /></Text>
                                </Radio>

                            </Stack>
                            <Box w="30%" textAlign="end">
                                <Text fontSize="sm">€ 20.00</Text>
                            </Box>
                        </Stack>
                    </Box>

                </Box>

            </Stack>

            <Stack direction={["column-reverse", "row"]} justify={["center", "space-between"]} w={["95%", "90%"]} gap={["0", "10px"]} m="auto">
                <Button colorScheme="gray" variant="solid" size="xs" borderRadius={0} px="15px" w="max-content" onClick={() => HandleStep(0)}>BACK TO SHOPPING BAG</Button>
                <Button color="white" background="black" _hover={{ background: "rgb(49,49,49)" }} size="xs" borderRadius={0} px="15px" w="max-content" onClick={() => HandleStep(2)} disabled={next}>PROCEED TO CHECKOUT</Button>
            </Stack>
        </>
    );
}

export default OneDelivery;