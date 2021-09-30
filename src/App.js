import './App.css';
import {Stepper, StepLabel,Step} from '@mui/material'
import {multiStepContext} from './Step/StepContext'
import FirstStep from './components/FirstStep/firstStep';
import SecondStep from './components/SecondStep/secondStep';
import ThirdStep from './components/ThirdStep/thirdStep';
import { useContext } from 'react';
import DisplayData from './components/Display Data/displayData';

function App() {

  const {currentStep, finalData} = useContext(multiStepContext)

  function showStep(step) {
      switch(step){
        case 1:
          return <FirstStep/>
        case 2: 
          return <SecondStep/>
        case 3: 
          return <ThirdStep/>
      }

  }
  
  return (
    <div className="App">

      <header className='app-header'>
        <h3>Reactjs App</h3>
          <div className="center-stepper">
            <Stepper style={{width: '18%'}} activeStep={currentStep -1}  orientation="horizontal">
                <Step>
                  <StepLabel></StepLabel>
                </Step>
                <Step>
                  <StepLabel></StepLabel>
                </Step>
                <Step>
                  <StepLabel></StepLabel>
                </Step>
            </Stepper>
            { showStep(currentStep)}
            {/* {finalData.length > 0 ? <DisplayData/> : ''} */}
        </div>

      </header>

    </div>
  );
}

export default App;
