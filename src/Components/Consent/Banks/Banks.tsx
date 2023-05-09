import { DUMMY_BANKS } from '../../../types/bank.model';
import BankItem from './BankItem';
import Classes from './Bank.module.scss';
function Banks() {
  return (
    <div className={Classes.banks}>
        {DUMMY_BANKS.map(bank=>(
            <BankItem key={bank.id} {...bank}/>
        ))}
    </div>
  )
}

export default Banks