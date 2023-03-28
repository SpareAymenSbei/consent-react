import { useContext, useEffect, useState } from 'react'
import { StepContext } from '../../context/step-context'
import Classes from './Stepper.module.scss'

function Stepper() {
    const context = useContext(StepContext);

    const listTitles: string[] = ["Consent", "Authentication", "Complete"]
    return (
        <div className={Classes.stepper}>
            <ul>
                {
                    listTitles.map((item, index) => (
                        <li key={index} className={`${context.stepCount >= index ? Classes.active : ''}`}>
                            <div className="step-inner">{item}</div>
                        </li>
                    ))}
            </ul>
            <div className={Classes.line}>
                <div className={Classes.lineProgress} style={{ width: context.stepperWidth + '%' }}></div>
            </div>
        </div>
    )
}

export default Stepper