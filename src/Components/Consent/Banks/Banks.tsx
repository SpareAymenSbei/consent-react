import { DUMMY_BANKS } from '../../../types/bank.model';
import BankItem from './BankItem';

function Banks() {
  return (
    <div>
        {DUMMY_BANKS.map(bank=>(
            <BankItem key={bank.id} {...bank}/>
        ))}
    </div>
  )
}

export default Banks