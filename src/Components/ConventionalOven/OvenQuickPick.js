import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const OvenQuickPick = (props) => {
    return (
        // Very Important Empty Parent Element else Ternary Operator Won't Work
        <>
            {
                // Checks If The Passed In Prop is Temp For Temperature Buttons Else -> Render Time Buttons
                props.tempOrTime === 'temp' ?
                    (<div className='ovenTempQPick-container'>
                        <Typography className="buttonsQuick" variant='h6'> Quick Pick</Typography>
                        <Button size='medium' onClick={props.ovenTempButton} variant="contained" color='primary'>300 °F</Button>
                        <Button size='medium' onClick={props.ovenTempButton} variant="contained" color='primary'>350 °F</Button>
                        <Button size='medium' onClick={props.ovenTempButton} variant="contained" color='primary'>400 °F</Button>
                    </div>)
                    :
                    (<div className='ovenTimeQPick-container'>
                        <Typography className="buttonsQuick" variant='h6'>Quick Add</Typography>
                        <Button size='medium' onClick={props.ovenTimeButton} variant="contained" color='primary'>+1</Button>
                        <Button size='medium' onClick={props.ovenTimeButton} variant="contained" color='primary' value='5'>+5</Button>
                        <Button size='medium' onClick={props.ovenTimeButton} variant="contained" color='primary' value='20'>+20</Button>
                    </div>)
            }
        </>
    );
}

export default OvenQuickPick

