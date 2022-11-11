import React from 'react';
import { Box, Divider, HStack, Text } from "@chakra-ui/react"

function DeliveryPaymentBox({HandleStep , current}) {


    return (
        <>

            <Box display={["none", "none", "block"]} m="40px auto" w={["95%" , "90%"]}>

                <HStack justify="space-between" align="center" textAlign="center">

                    <Box w="100%" cursor="pointer" >
                        <Text fontSize="sm" mb="5px" color="GrayText">SHOPPING BAG</Text>
                        <Box m="auto" w="12px" h="12px" background="GrayText"></Box>

                    </Box >

                    <Box display={""} w="100%" onClick={()=>HandleStep(0)} cursor="pointer">
                        <Text fontSize="sm" mb="5px" color={current === 0?"black":"GrayText"}>SIGN-IN</Text>
                        <Box m="auto" w="12px" h="12px" background={current === 0?"black": current > 0 ? "GrayText" : "gray.200"}></Box>

                    </Box>

                    <Box w="100%" onClick={()=>HandleStep(1)} cursor="pointer">
                        <Text fontSize="sm" mb="5px" color={current === 1?"black":"GrayText"}>DELIVERY</Text>
                        <Box m="auto" w="12px" h="12px" background={current === 1?"black": current > 1 ? "GrayText" : "gray.200"}></Box>
                    </Box>

                    <Box w="100%" onClick={()=>HandleStep(2)} cursor="pointer">
                        <Text fontSize="sm" mb="5px" color={current === 2?"black":"GrayText"}>CONFIRM</Text>
                        <Box m="auto" w="12px" h="12px" background={current === 2?"black": current > 2 ? "GrayText" : "gray.200"}></Box>
                    </Box>

                    <Box w="100%" onClick={()=>HandleStep(3)} cursor="pointer">
                        <Text fontSize="sm" mb="5px" color={current === 3?"black":"GrayText"}>PAYMENT</Text>
                        <Box m="auto" w="12px" h="12px" background={current === 3?"black": current > 3 ? "GrayText" : "gray.200"}></Box>
                    </Box>

                </HStack>
                <Divider position="relative" top="-6px" zIndex="-1" />

            </Box>

        </>
    );
}

export default DeliveryPaymentBox;