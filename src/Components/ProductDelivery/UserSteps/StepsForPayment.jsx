import React from 'react';
import ZeroLogin from './ZeroLogin';
import OneDelivery from "./OneDelivery"
import TwoPayment from "./TwoPayment"
import ThreeConfirm from "./ThreeConfirm"
import { useState } from 'react';
import DeliveryPaymentBox from '../DeliveryPaymentBox';

function StepsForPayment(props) {

    const allStep = [
    <ZeroLogin HandleStep={(ind)=>HandleStep(ind)} />,
    <OneDelivery HandleStep={(ind)=>HandleStep(ind)}/>,
    <ThreeConfirm HandleStep={(ind)=>HandleStep(ind)}/>,
    <TwoPayment HandleStep={(ind)=>HandleStep(ind)}/>
]

    const [step , setStep] = useState(0)

    const HandleStep = (ind=0)=>{
        if(step > allStep.length - 1 || step < 0){
            console.log("Col")
            return
        }
        console.log(ind)
        setStep(ind)

    }


    return (
        <>
            <DeliveryPaymentBox HandleStep={(ind)=>HandleStep(ind)} current={step}/>

            {allStep[step]}

        </>
    );
}

export default StepsForPayment;