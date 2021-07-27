import Typography from '@material-ui/core/Typography';

import OvenQuickPick from '../OvenQuickPick';

import './Oven_Time.css';

const OvenTime = (props) => {

    // Oven Time Input Handler, Passes Data to Parent Component to Change State
    const ovenTimeChangeHandler = (event) => {
        props.timeChange1(parseInt(event.target.value));
    }

    // Oven Time Button Handler, Passes Data to Parent Component to Change State
    const ovenTimeButtonChangeHandler = (event) => {
        event.preventDefault();
        props.timeChange(parseInt(event.target.innerText));
    }

    return (
        <div className='ovenTimeSection'>
            <div className='ovenTime-container'>
                <Typography variant='h5'> Oven Time: </Typography>
                <input id='ovenTimeNumber' min="0" max='999' maxLength='3' autoFocus placeholder='0' onChange={ovenTimeChangeHandler} type='number' value={props.ovenTime} ></input>
                <Typography variant='h5'>Mins</Typography>
            </div>
            {/* Waits for an Event to Occur, Then Activates The Parent Method to Process The Event Data -> Passed Further Up to App.js to Store State */}
            <OvenQuickPick ovenTimeButton={ovenTimeButtonChangeHandler} />
        </div>
    )
}

export default OvenTime
