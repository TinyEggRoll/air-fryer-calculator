import Typography from '@material-ui/core/Typography'

const AirFTempTime = (props) => {
    return (
        <div >
            {/* Simple Text for Displaying Temp & Time For Air Fryer */}
            <Typography variant='h4' gutterBottom >Temp: {props.airFTemp + "° F"}</Typography>
            <Typography variant='h4' gutterBottom >Time: {props.airFTime + " Mins"}</Typography>
        </div>
    )
}

export default AirFTempTime
