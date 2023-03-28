import Classes from './BankItem.module.scss'
import Bank from "../../../types/bank.model"
import { useContext } from 'react'
import { StepContext } from '../../../context/step-context'

function BankItem(bank:Bank) {
  const ctx = useContext(StepContext);
  return (
    <div onClick={ctx.nextStep} className={Classes.bank}>
        <img src={bank.img} alt={bank.name} />
        <div className={Classes.name}>{bank.name}</div>
    </div>
  )
}

export default BankItem