import { Box, Button, FormControl, HStack, Input, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import React from 'react';

function OneDelivery(props) {
    return (
        <Stack m="30px auto" direction={["column-reverse", "row"]} w={["95%", "90%"]} gap={["0", "10px"]}>

            <Box w="100%" textAlign={["center", "start"]} borderTop={["1px solid  rgb(237,241,246)", "0"]} pr={["0", "20px", "40px"]} pt={["15px", "0"]}>

                <Text py="10px" >SHIPPING ADDRESS</Text>
                <Text py="10px" fontSize="sm" color="GrayText">Please enter your shipping address in the form below.</Text>

                <RadioGroup defaultValue="1">
                    <HStack>
                        <Radio size='sm' colorScheme='red' value="1">
                            Ms. *
                        </Radio>

                        <Radio size='sm' colorScheme='red' value="2">
                            Mrs. *
                        </Radio>

                        <Radio size='sm' colorScheme='red' value="3">
                            Mr. *
                        </Radio>
                    </HStack>
                </RadioGroup>

                <FormControl isRequired my="10px">
                    <Input placeholder='First name *' borderRadius={0} fontSize="sm" />
                </FormControl>

                <FormControl isRequired my="10px">
                    <Input placeholder='Last name *' borderRadius={0} fontSize="sm" />
                </FormControl>

                <FormControl isRequired my="10px">
                    <Input placeholder='Company *' borderRadius={0} fontSize="sm" />
                </FormControl>

                <FormControl isRequired my="10px">
                    <Input placeholder='Email address *' borderRadius={0} fontSize="sm" />
                </FormControl>

                <FormControl isRequired my="10px">
                    <Input placeholder='Street *' borderRadius={0} fontSize="sm" />
                </FormControl>

                <FormControl isRequired my="10px">
                    <Input placeholder='Address line 2 *' borderRadius={0} fontSize="sm" />
                </FormControl>

                <FormControl isRequired my="10px">
                    <Input placeholder='Postcode *' borderRadius={0} fontSize="sm" />
                </FormControl>

                <FormControl isRequired my="10px">
                    <Input placeholder='City *' borderRadius={0} fontSize="sm" />
                </FormControl>

                <FormControl isRequired my="10px">
                    <Input placeholder='Malaysia *' borderRadius={0} fontSize="sm" />
                </FormControl>

                <FormControl isRequired my="10px">
                    <Input placeholder='Mobile Phone *' borderRadius={0} fontSize="sm" />
                </FormControl>

                <Text fontSize="sm" color="GrayText" my="10px">* required fields</Text>


                <Box py="10px">
                    <Text py="5px" >SHIPPING ADDRESS</Text>
                    <Text py="5px" fontSize="sm" color="GrayText">Please enter your shipping address in the form below.</Text>
                    <Box pt="5px">
                        <Button colorScheme="gray" variant="solid" size="xs" borderRadius={0} px="15px" >ADD BILLING ADDRESS</Button>
                    </Box>
                </Box>


            </Box>


            <Box w="100%" textAlign={["center", "start"]} borderLeft={["0", "1px solid  rgb(237,241,246)"]} pl={["0", "20px", "40px"]} pb={["15px", "0"]}>

                asdfas

            </Box>

        </Stack>
    );
}

export default OneDelivery;