import Classes from './Consent.module.scss';
import { IoSearch } from 'react-icons/io5'
import Banks from './Banks/Banks';
function Consent() {
  return (
    <div className={Classes.consent}>
      <div className={Classes.input_holder}>
        <IoSearch className={`${Classes.icon} shadow`} />
        <input className={`shadow`} placeholder="Enter the Bank name" type="text" name="filterInput" />
      </div>
      <Banks />
      <div className={Classes.hint}>
        We are committed to keep your data safe and your information will be fully encrypted
        using SSL 256-bit encryption, the security standard that banks use.
      </div>
    </div>
  )
}

export default Consent