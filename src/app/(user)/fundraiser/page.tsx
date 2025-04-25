import React from 'react';
// import Fund from "../../../components/user/fundraised/Fund";
import Hero from "../../../components/user/herosection/HeroSection"
import "./fundraiser.css";
import About from '../../../components/user/fundraisercomponents/About';
import FundraiserDetails from '../../../components/user/fundraisercomponents/FundraiserDetails';
import Impact from '../../../components/user/fundraisercomponents/Impact';
import FundraisingGoals from '../../../components/user/fundraisercomponents/FundraisingGoals';
// import Testimonials from '../components/fundraisercomponents/Testamonials';
import Team from "../../../components/user/fundraisercomponents/Team";
import Partners from '../../../components/user/fundraisercomponents/Partner';

const Fundraiser = () => {
  return (
    <div>
      <div className='fund-raiser-container'>
        
      
        <h6>Fundraiser to support and Manage "Ragat Chaiyo" Blood Hotline in Nepal</h6>
     {/* <Fund/> */}
       <About/>
       <FundraiserDetails/>
       <Impact/>
      <FundraisingGoals/>
      {/* <Testimonials/> */}
      <Team/>
      <Partners/>
      <div>
        {/* <Fund /> */}
      </div>
    </div>
    </div>
  );
};

export default Fundraiser;
