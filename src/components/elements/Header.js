import React from 'react' //es6 syntax for importing modules 
// import styled from 'styled-components'
import { Link } from '@reach/router'

import FLIXBOXLOGO from '../images/FLIXBOXLOGO.png'
import TMDBLogo from '../images/tmdb_logo.svg'

import {
  StyledHeader,
  StyledFLIXBOXLOGO,
  StyledTMDBLogo
} from '../styles/StyledHeader'

 //need to create a function using hooks with the es6 arrow function /functional components that include states and logic
//implicit return which is fine for 'header' but if were going to have logic inside,  we need {} and return statement 

//1. learn how ot create a style component
//2. learn how to handle props in style components
//3. create a global style with style components

// const StyledHeader = styled.div`
// background: #1c1c1c;
// padding: 0 20px;
// box-sizing: border-box;

// .header-content {
//   max-width: 1280px;
//   min-height: 120px;
//   padding: 20px 0;
//   margin: 0 auto;
//   box-sizing: border-box;

//   @media screen and (max-width: 500px) {
//     ming-height: 0px;
//   }
// }
// `

// const StyledRMDBLogo = styled.img`
// width: 250px;
// margin-top: 20px;

// @media screen and (max-width: 500px) {
// width: 150px;
// margin-top: 25px;
// }
// `

// const StyledTMDBLogo = styled.img`
// width: 122px;
// margin-top: 25px;
// float: right;

// @media screen and (max-width: 500px) {
// display: inline-block;
// dth: 80px;
// margin-top: 0px;
// }
// `
 const Header = () => (
 
 <StyledHeader>
 <div className="header-content"> 
 <Link to= "/"> 
 
 <StyledFLIXBOXLOGO src={FLIXBOXLOGO} alt="rmdb-logo" />
 {/* <flexbox>flexbox</flexbox> */}
 
 </Link>

 <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo" />

 </div>
   </StyledHeader>)

 export default Header