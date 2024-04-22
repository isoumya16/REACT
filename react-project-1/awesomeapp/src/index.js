import Card from "./components/Card";
import Sdata from "./components/Sdata";
import ReactDOM from 'react-dom';
import './index.css';


ReactDOM.render(

  <>
  <h1 className="heading_style"> List Of Top 5 Netflix Series in 2024 </h1>
  
  {
  Sdata.map((val) => <Card
        imgsrc = {val.imgsrc}
        seriestitle = {val.seriestitle}
        seriesname = {val.seriesname}
        serieslink = {val.serieslink} 
      />
  )
}
</>

, document.getElementById('root')
)




  