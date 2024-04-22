function Card(props) {

    // console.log(props);
    
    return(
      <>
      
      <div className="cards">
    
        <div className="card">
    
          <img src={props.imgsrc} alt="myPic" className="card__img"/>
    
          <div className="card__info">
    
            <span className="card__category"> {props.seriestitle} </span>
    
            <h4 className="card__title"> {props.seriesname} </h4>
    
            <a href={props.serieslink} target='_blank'>
    
              <button> WATCH NOW </button>
    
            </a>
  
          </div>
    
        </div>
    
      </div>
  
    </>
    )
  }
  
  export default Card;
  