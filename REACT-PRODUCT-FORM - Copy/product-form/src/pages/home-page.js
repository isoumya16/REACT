import React from 'react';
import Headercomp from '../components/header-comp';
import Homecomp from '../components/home-comp';
import Footercomp from '../components/footer-comp';

const Homepage = () => {
  return (
    <>
    {<Headercomp/>}

    {<Homecomp/>}

    {<Footercomp/>}
    </>
  )
}

export default Homepage;