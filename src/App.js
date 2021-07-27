import { useState } from 'react';

import Typography from '@material-ui/core/Typography'

import OvenTemp from "./Components/ConventionalOven/Oven_Temp/OvenTemp";
import OvenTime from "./Components/ConventionalOven/Oven_Time/OvenTime";
import AirFTempTime from './Components/AirFryer/AirFTempTime';
import './App.css';


function App() {

  // Set the State for Oven Temp & Time + Air Fryer Temp & Time w/ Initial Values
  const [ovenTemp, setOvenTemp] = useState(350);
  const [ovenTime, setOvenTime] = useState(0);
  const [airFTemp, setAirFTemp] = useState(315);
  const [airFTime, setAirFTime] = useState(0);

  // Oven Temp Handler, Set New State Value

  const ovenTempChangeHandler = (data) => {
    setOvenTemp(data);
    airFTempChangeHandler(data);
  }

  // Two Handlers for Adjusting Correct Oven Temp. One For Button (Incremental) vs Input Box (Absolute Value)
  const ovenTimeChangeHandler = (data) => {
    const totalTime = data + ovenTime;
    setOvenTime(totalTime);
    airFTimeChangeHandler(totalTime);
  }

  const ovenTimeAbsoluteChangeHandler = (data) => {
    setOvenTime(data);
    airFTimeChangeHandler(data);
  }

  // Air Fryer Temp & Time Handler. Sets New Value

  const airFTempChangeHandler = (data) => {
    setAirFTemp(Math.round(data * .90));
  }

  const airFTimeChangeHandler = (data) => {
    setAirFTime(Math.round(data * .80));
  }

  return (
    <div>
      {/* Top/Heading Section. Includes Title & Subheading */}
      <div className='headingSection-container'>
        <Typography id='title' variant='h2' gutterBottom align='center'>Air Fryer Calculator</Typography>
        <Typography id='titleSub' variant='h6' align='center'>Easily Convert Oven Bake Instructions To Air Fryer.</Typography>
      </div>

      {/* Main Content Includes Oven Box And Air Fryer Box */}
      <div className='mainSection-container'>
        {/* Oven Box Title + Involves Oven Temperature (Top) & Oven Time (Bottom) */}
        <div className='ovenSection-container'>
          <Typography align='center' id='ovenSubTitle' variant='h3' gutterBottom >Conventional</Typography>
          <OvenTemp ovenTemp={ovenTemp} tempChange={ovenTempChangeHandler} />
          <OvenTime ovenTime={ovenTime} timeChange={ovenTimeChangeHandler} timeChange1={ovenTimeAbsoluteChangeHandler} />
        </div>
        {/* Air Fryer Section Involves Title + Temp & Time */}
        <div className='airFSection-container'>
          <Typography align='center' id='airFryerSubTitle' variant='h3' gutterBottom >Air Fryer</Typography>
          <AirFTempTime airFTemp={airFTemp} airFTime={airFTime} />
        </div>
      </div>
    </div>
  );
}

export default App;
