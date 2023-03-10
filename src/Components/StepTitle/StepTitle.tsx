import React, { useContext } from 'react'
import Classes from './StepTitle.module.scss';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { StepContext } from '../../context/step-context';
import stepTitleList from '../../types/step-title.model';
function StepTitle() {
  const context = useContext(StepContext);
  return (
    <div className={Classes.stepTitle}>
      <BiLeftArrowAlt className='title' />
      <div className={Classes.meta}>
        <div className={`title ${Classes.metaTitle}`}>{stepTitleList[context.stepCount].title}</div>
        <div className={`${Classes.metaText}`}>{stepTitleList[context.stepCount].description}</div>
      </div>
    </div>
  )
}

export default StepTitle