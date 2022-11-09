import React from 'react';
import { Box } from "@chakra-ui/react"
import DeliveryCompHeader from './DeliveryComp/DeliveryCompHeader';
import DeliveryPaymentBox from './DeliveryComp/DeliveryPaymentBox';
import DevileryCompContact from './DeliveryComp/DevileryCompContact';
import DeliveryCopyRight from './DeliveryComp/DeliveryCopyRight';
import StepsForPayment from './DeliveryComp/UserSteps/StepsForPayment';

function Delivery() {

    return (
        <Box>

            <DeliveryCompHeader/>

            {/* <DeliveryPaymentBox/> */}

            <StepsForPayment/>
            
            <DevileryCompContact/>

            <DeliveryCopyRight/>


        </Box>
    );
}

export default Delivery;