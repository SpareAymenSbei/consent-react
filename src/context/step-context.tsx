import React, { Children, useState } from "react";

export const StepContext =React.createContext({
    stepCount:0,
    nextStep:()=>{},
    prevStep:()=>{}
});

const StepContextProvider = (props: any) =>{
    const [step, setStep] = useState(0);
    const nextStepHandler = ()=>{
        if(step<2)        
        setStep(prevState=>prevState+1);
    }
    const prevStepHandler = ()=>{
        if(step>0)
        setStep(prevState=>prevState-1);
    }
    return <StepContext.Provider value={{stepCount:step,nextStep:nextStepHandler,prevStep:prevStepHandler}}>{props.children}</StepContext.Provider>
}
export default StepContextProvider