import React from 'react';
import Headercomp from '../components/header-comp';
import Productcomp from '../components/product-comp';
import Footercomp from '../components/footer-comp';


const Productpage = (props) => {

  // console.log(props);

  return (
    <>
    {<Headercomp/>}
    {<Productcomp finalData={props.pageData.registration}/>}
    {<Footercomp/>}
    </>
    
  )
}

export default Productpage;