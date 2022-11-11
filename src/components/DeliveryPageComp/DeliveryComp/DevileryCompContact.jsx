import React from 'react';
import { Box, Divider, Icon, Link, Stack, Text } from "@chakra-ui/react"

import { BsFillTelephoneFill } from "react-icons/bs"
import { BsEnvelopeFill } from "react-icons/bs"

function DevileryCompContact() {
    return (
        <Box m="20px auto" textAlign="center" w={["95%" , "90%"]}>

            <Divider m="auto" w={["95%" , "100%"]} />

            <Text fontSize="sm" color="GrayText" mt="20px">
                You can also place your order via telephone.
            </Text>

            <Stack direction={["column" , "row" ]} w={["97%" , "95%"]} m="auto" gap={["5px" , "5px" ,"10px"]} my="20px">

                <Box w="100%" border='1px' borderColor='gray.200'>
                    <Box p="15px">
                        <Icon fontSize="30px" as={BsFillTelephoneFill} />
                        <Text pt="5px" pb="10px">CALL US</Text>
                        <Text fontSize="sm" color="GrayText"> <Link href='#' textDecoration="underline">+49 89 127695-101</Link></Text>
                        <Text fontSize="sm" color="GrayText">Argentina: <Link href='#' textDecoration="underline">0800-666-0663</Link></Text>
                        <Text fontSize="sm" color="GrayText">Chile: <Link href='#' textDecoration="underline">800-914-515</Link></Text>
                        <Text fontSize="sm" color="GrayText">Colombia: <Link href='#' textDecoration="underline"> 01800-518-5268</Link></Text>
                        <Text fontSize="sm" color="GrayText">Mexico: <Link href='#' textDecoration="underline">01-800-099-0703</Link></Text>
                        <Text fontSize="sm" color="GrayText">Peru   : <Link href='#' textDecoration="underline">0800-78259</Link></Text>
                        <Text fontSize="sm" color="GrayText">Puerto Rico: <Link href='#' textDecoration="underline">1-787-303-4205</Link></Text>

                        <Text py="10px" fontSize="sm" color="GrayText">Available 24/7</Text>
                    
                    </Box>
                </Box>

                <Box w="100%" border='1px' borderColor='gray.200'>
                    <Box p="15px">
                        <Icon fontSize="30px" as={BsEnvelopeFill} />
                        <Text pt="5px">MAIL US</Text>
                        <Link href='#' fontSize="sm" color="GrayText" textDecoration="underline">customercare@mytheresa.com</Link>
                    </Box>
                </Box>

            </Stack>


            <Divider m="auto" w={["95%" , "100%"]}/>

        </Box>
    );
}

export default DevileryCompContact;