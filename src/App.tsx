import { useContext } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Stepper from './Components/Stepper/Stepper';
import StepTitle from './Components/StepTitle/StepTitle';
import { StepContext } from './context/step-context'
import stepTitleList from './types/step-title.model';

function App() {
  const ctx = useContext(StepContext);
  return (
    <div className="App">
      <Header/>
      <StepTitle/>
      <Stepper/>
    </div>
  )
}

export default App
