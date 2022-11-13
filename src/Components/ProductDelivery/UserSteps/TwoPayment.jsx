import { Box, Button, FormControl, FormLabel, HStack, Input, Radio, RadioGroup, Text } from '@chakra-ui/react';
import React from 'react';
import { Stack, Icon } from "@chakra-ui/react"
import { BsFillCreditCard2FrontFill, BsPaypal } from "react-icons/bs";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios"
import { useState } from 'react';
import { useEffect } from 'react';

function TwoPayment({ HandleStep }) {

    const [next, setNext] = useState(true)

    const [paypalTogle, setPaypalTogle] = useState(false)

    const [formData, setFormData] = useState({
        cardName: "",
        cardNumber: "",
        expDate: "",
        CVV: ""
    })

    const HandleFormData = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        const status = () => {
            for (let key in formData) {
                if (formData[key] === "") return true
            }

            return false
        }
        setNext(status())
    }, [formData])


    const HandlePay = () => {
        axios.post("http://localhost:1100/checkout-session", {
            items: [
                { id: 1, quantity: 3 },
                { id: 2, quantity: 2 },
            ]
        })
            .then(res => {
                console.log(res)
                window.location.replace(res.data.url)
            })
            .catch(err => {
                console.log(err)
            })
    }


    const HandlePaypalTogle = (e) => {
        console.log(e.target.value)
        let val = e.target.value
        if (val == 1) {
            setPaypalTogle(false)
        } else {
            setPaypalTogle(true)
        }
    }

    console.log(formData)


    return (

        <>
            <Stack m="30px auto" direction="column" w={["95%", "90%"]} gap={["0", "5px"]}>


                <Text >SHIPPING ADDRESS</Text>
                <Text fontSize="sm" color="GrayText">Please enter your shipping address in the form below.</Text>


                <RadioGroup defaultValue="1">
                    <Box borderTop="1px solid rgb(237,241,246)" py="10px">

                        <Stack direction={["column", "row"]} justify="space-between">

                            <Box w={["100%", "30%"]}>
                                <Stack direction="row" align="center" justify="start">
                                    <Box position="relative" top="2px">
                                        <Radio size='sm' colorScheme='red' value="1" onChange={HandlePaypalTogle}>
                                            <Icon as={BsFillCreditCard2FrontFill} color="black" fontSize="35px" mx="2px" />
                                        </Radio>
                                    </Box>
                                    <Box>
                                        <Text fontSize="md" fontWeight="bold">
                                            Card
                                        </Text>
                                    </Box>
                                </Stack>
                                <Text fontSize="sm" ml="20px">Immediate Shipping</Text>
                            </Box>


                            <Box w={["100%", "50%"]}>

                                <FormControl isRequired my="10px">
                                    <FormLabel>Name on Card</FormLabel>
                                    <Input borderRadius={0} fontSize="sm" name="cardName" onChange={HandleFormData} />
                                </FormControl>
                                <FormControl isRequired my="10px">
                                    <FormLabel>Credit card number</FormLabel>
                                    <Input placeholder='111 222 333 444' borderRadius={0} fontSize="sm" name="cardNumber" onChange={HandleFormData} />
                                </FormControl>

                                <HStack>
                                    <FormControl isRequired my="10px">
                                        <FormLabel>Expiration date </FormLabel>
                                        <Input placeholder='MM/YY' borderRadius={0} fontSize="sm" name="expDate" onChange={HandleFormData} />
                                    </FormControl>
                                    <FormControl isRequired my="10px">
                                        <FormLabel> CVC / CVV </FormLabel>
                                        <Input placeholder='123' borderRadius={0} fontSize="sm" name="CVV" onChange={HandleFormData} />
                                    </FormControl>
                                </HStack>
                                <Text>* required fields</Text>


                            </Box>

                        </Stack>

                    </Box>


                    <Box borderTop="1px solid rgb(237,241,246)" py="10px">
                        <Stack direction="row" align="center" justify="start">
                            <Box position="relative" top="2px">
                                <Radio size='sm' colorScheme='red' value="2" onChange={HandlePaypalTogle}>
                                    <Icon as={BsPaypal} color="black" fontSize="35px" mx="2px" />
                                </Radio>
                            </Box>
                            <Box>
                                {/* <Text fontSize="md" fontWeight="bold"> */}
                                {/* PayPal */}

                                {paypalTogle && (
                                    <PayPalScriptProvider options={{ "client-id": "test" }}>
                                        <PayPalButtons style={{ layout: "horizontal" }} />
                                    </PayPalScriptProvider>
                                )}

                                {/* </Text> */}
                            </Box>
                        </Stack>
                        <Text fontSize="sm" ml="20px">Immediate Shipping</Text>
                    </Box>
                </RadioGroup>

            </Stack >

            <Stack direction={["column-reverse", "row"]} justify={["center", "space-between"]} w={["95%", "90%"]} gap={["0", "10px"]} m="auto">
                <Button colorScheme="gray" variant="solid" size="xs" borderRadius={0} px="15px" w="max-content" onClick={() => HandleStep(2)}>BACK TO CONFIRM</Button>
                <Button color="white" background="black" _hover={{ background: "rgb(49,49,49)" }} size="xs" borderRadius={0} px="15px" w="max-content" onClick={HandlePay} disabled={next}>PROCEED TO PAY</Button>
            </Stack>

        </>
    );
}

export default TwoPayment;