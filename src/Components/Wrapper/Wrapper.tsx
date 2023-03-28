import { useContext } from 'react';
import { StepContext } from '../../context/step-context';
import Authentication from '../Authentication/Authentication';
import Complete from '../Complete/Complete';
import Consent from '../Consent/Consent';
import Classes from './Wrapper.module.scss';
function Wrapper() {
  const count = useContext(StepContext).stepCount;

  return (
    <div className={Classes.wrapper}>
      {
        count === 0 ? <Consent /> : count === 1 ? <Authentication /> : <Complete />
      }
    </div>
  )
}

export default Wrapper