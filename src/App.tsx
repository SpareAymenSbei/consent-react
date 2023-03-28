import { useContext } from 'react'
import Header from './Components/Header/Header'
import Stepper from './Components/Stepper/Stepper';
import StepTitle from './Components/StepTitle/StepTitle';
import Wrapper from './Components/Wrapper/Wrapper';
import { StepContext } from './context/step-context'

function App() {
  const context = useContext(StepContext);

  return (
    <>
      <Header />
      <StepTitle />
      <Stepper />
      <Wrapper />
    </>
  )
}

export default App
