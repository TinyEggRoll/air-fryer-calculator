import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import OvenQuickPick from '../OvenQuickPick';
import './Oven_Temp.css';

const OvenTemp = (props) => {

    // Oven Temp Slider Handler, Passes Data to Parent Component to Change State
    const ovenTempSliderChangeHandler = (event, newValue) => {
        props.tempChange((newValue));
    }

    // Oven Temp Button Handler, Passes Data to Parent Component to Change State
    const ovenTempButtonChangeHandler = (event) => {
        event.preventDefault();
        props.tempChange(parseInt(event.target.innerText));
    }

    return (
        <div className='ovenTempSection'>
            <div className='ovenTemp-container'>
                {/* Slider Component from Material-UI */}
                <Slider
                    id='ovenTemp-Slider'
                    onChange={ovenTempSliderChangeHandler}
                    value={props.ovenTemp}
                    valueLabelDisplay="auto"
                    step={25}
                    min={200}
                    max={550}
                />
                <Typography variant='h5' id='testing' gutterBottom>Oven Temp: {props.ovenTemp + '° F'} </Typography>
            </div>
            {/* 3 Buttons for Quick Access, Takes Passes In Handler for onClick/onChange Event */}
            <OvenQuickPick tempOrTime={'temp'} ovenTempButton={ovenTempButtonChangeHandler} />
        </div>
    )
}

export default OvenTemp
