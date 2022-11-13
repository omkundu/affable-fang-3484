import React from 'react';
import { Box } from "@chakra-ui/react"
import DeliveryCompHeader from '../Components/ProductDelivery/DeliveryCompHeader';
import DevileryCompContact from '../Components/ProductDelivery/DevileryCompContact';
import DeliveryCopyRight from "../Components/ProductDelivery/DeliveryCopyRight"
import StepsForPayment from '../Components/ProductDelivery/UserSteps/StepsForPayment';

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