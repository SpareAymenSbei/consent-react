import React, { Children, useState } from "react";

export const StepContext =React.createContext({
    stepCount:0,
    stepperWidth:25,
    nextStep:()=>{},
    prevStep:()=>{}
});

const StepContextProvider = (props: any) =>{
    const [step, setStep] = useState(0);
    const [stepperWidth, setStepperWidth] = useState(25);
    const nextStepHandler = ()=>{
        if(step<2) {
            setStep(prevState=>prevState+1);
            setStepperWidth(prevWidth => prevWidth === 75 ? prevWidth + 25 : 75);
        }       
        
    }
    const prevStepHandler = ()=>{
        if(step>0){
            setStep(prevState=>prevState-1);
            setStepperWidth(prevWidth => prevWidth === 100 ? prevWidth - 25 : 25);
        }
        
    }
    
    return <StepContext.Provider value={{stepCount:step,stepperWidth:stepperWidth,nextStep:nextStepHandler,prevStep:prevStepHandler}}>{props.children}</StepContext.Provider>
}
export default StepContextProvider