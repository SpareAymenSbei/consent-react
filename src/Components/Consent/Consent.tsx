import Classes from './Consent.module.scss';
import { IoIosSearch } from 'react-icons/io'
import Banks from './Banks/Banks';

function Consent() {
  return (
    <div className={Classes.consent}>
      <div className={Classes.input_holder}>
        <IoIosSearch className={`${Classes.icon} shadow`} />
        <input className={`shadow`} placeholder="Enter the Bank name" type="text" name="filterInput" />
      </div>
      <Banks />
      <div className={`${Classes.hint} ${Classes.blue}`}>
        <b >Don't see your bank?</b>
        <div className={Classes.desc}>We are very quickly adding other banks
          and hope to have your bank soon.
          Send us a message on the live chat to let us know!
        </div>
      </div>
      <div className={Classes.hint}>
        We are committed to keep your data safe and your information will be fully encrypted
        using SSL 256-bit encryption, the security standard that banks use.
      </div>
    </div>
  )
}

export default Consent