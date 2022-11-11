import React from 'react';
import { Box } from "@chakra-ui/react"
import DeliveryCompHeader from '../components/DeliveryPageComp/DeliveryComp/DeliveryCompHeader';
import DevileryCompContact from '../components/DeliveryPageComp/DeliveryComp/DevileryCompContact';
import DeliveryCopyRight from '../components/DeliveryPageComp/DeliveryComp/DeliveryCopyRight';
import StepsForPayment from '../components/DeliveryPageComp/DeliveryComp/UserSteps/StepsForPayment';

function Delivery() {

    return (
        <Box>

            <DeliveryCompHeader/>

            <StepsForPayment/>
            
            <DevileryCompContact/>

            <DeliveryCopyRight/>


        </Box>
    );
}

export default Delivery;