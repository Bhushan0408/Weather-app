import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

import "./InfoBox.css";
export default function InfoBox({info}) {

    const HOT_URL="https://plus.unsplash.com/premium_photo-1689298477277-7e488d5ecc10?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1641672222794-536ad524a929?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAINY_URL="https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1601116780183-d2e80a0bd47f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhaW55d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
 
  return (
    <div className="InfoBox">
      <div className="cardContainer">
       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {info.humidity >80? RAINY_URL: info.temp>15?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        {/* <Typography gutterBottom variant="h5" component="div"> */}
           <Typography
  variant="h5"
  component="div"
  fontFamily= "Georgia"
  sx={{ textTransform: "capitalize"}}
>
         {info.city } {info.humidity >80? <ThunderstormIcon/>: info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
        <div>Temprature = {info.temp}&deg;C</div>
        <div>FeelsLike weather is <i>{info.weather}</i> and  = {info.feelsLike}&deg;C</div>
        <div>Humidity = {info.humidity}</div>
        <div>TempMax = {info.tempMax}&deg;C</div>
        <div>TempMin = {info.tempMin}&deg;C</div>

        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>
  );
}
