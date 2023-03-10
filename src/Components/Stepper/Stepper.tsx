import { useContext, useState } from 'react'
import { StepContext } from '../../context/step-context'
import Classes from './Stepper.module.scss'

function Stepper() {
    const context = useContext(StepContext);
    const [counter,setCounter] = useState(10);
    const addCounter =()=>{
        setCounter(prevState=>prevState * 2);
    }
    const listTitles:string[]= ["Consent", "Authentication", "Complete"]
    return (
        <div className={Classes.stepper}>
            <ul>
              {
                listTitles.map((item,index)=>(
                    <li className={`${context.stepCount>=index ? Classes.active: ''}`}>
                    <div className="step-inner">{item}</div>
                </li> 
                ))
              }
            </ul>
            <div className={Classes.line}>
                <div className={Classes.lineProgress} style={{width:counter+'%'}}></div>
            </div>
            <button onClick={addCounter}>{`test : ${counter}`}</button>
        </div>
    )
}

export default Stepper