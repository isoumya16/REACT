function App() {

let currTime = new Date().getHours();
let greetings = '';

const cssStyle = {};

if (currTime >= 1 && currTime < 12) {

  greetings = 'Good Morning!!';
  cssStyle.color = 'green';

}else if(currTime >= 12 && currTime < 19){

  greetings = 'Good Afternoon!!';
  cssStyle.color = 'orange';

}else{

   greetings = 'Good Night!!';
   cssStyle.color = 'black';

}
    return (
    <>
    <div> 
      <h1 className='heading'>Hello sir,
        <span style={cssStyle}> {greetings} </span>
      </h1>
    </div>
    </>
    );
    
}

export default App;