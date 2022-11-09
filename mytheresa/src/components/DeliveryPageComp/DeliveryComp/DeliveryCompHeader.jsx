import React from 'react';
import { Divider, Image, Link, Stack} from "@chakra-ui/react"
import { HeaderIMG } from "../../../image/PaymentPageIMG";


function DeliveryCompHeader() {
    return (
        <>
            <Stack align="center" mt={["0", "0", "80px"]} p="10px">
                <Link href="#">
                    <Image src={HeaderIMG} alt="WebsiteLOGO" width={["150px", "150px", "280px"]} />
                </Link>
            </Stack>
            <Divider w="95%" m="auto" display={["block", "block", "none"]} />
        </>
    );
}

export default DeliveryCompHeader;