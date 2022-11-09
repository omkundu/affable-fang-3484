import React from 'react';
import { Box, HStack, Link, Stack, Text } from "@chakra-ui/react"

function DeliveryCopyRight(props) {
    return (
        <Stack direction={["column-reverse" , "column-reverse" ,"row" ]} justify="space-between" w={["95%" , "90%"]} m="20px auto" gap={["10px" , "10px" , "0"]} textAlign="center">
            
            <Box>
                <Text fontSize="sm" color="GrayText">copyright © 2006-2022 mytheresa.com</Text>
            </Box>

            <HStack gap={["5px" , "10px"]} justify="center">
                <Link href='#' fontSize="sm" color="GrayText">terms of use</Link>
                <Link href='#' fontSize="sm" color="GrayText"> privacy policy</Link>
                <Link href='#' fontSize="sm" color="GrayText">imprint</Link>

            </HStack>

        </Stack>
    );
}

export default DeliveryCopyRight;