import React from 'react'
import styled from 'styled-components'
import iedcLogo from './images/iedcLogo.svg'
import logo from './images/logo.webp'
import hamburger from './images/hamburger.svg'
import { useState } from 'react'



function Header({
  scrollToHome,
  scrollToAnoucements,
  scrollToTestimonials,
}) {
const[showHamburger,setShowHamburger]=useState(false)



  const handleHamburger = () => {
    setShowHamburger(!showHamburger)
  }



function HamburgerMenu({showHamburger}){
  return(
    <HamburgerMenuContainer showhamburger={showHamburger.toString()}>
      <div className="linksH">
        <a className='linkH' onClick={scrollToHome} >Home</a>
        <a className='linkH' onClick={scrollToAnoucements}>Events</a>
        <a className='linkH' >Execom</a>
        <a className='linkH' onClick={scrollToTestimonials}>Testimonials</a>
        <a className='JoinbtnH'>Join Us</a>

      </div>
    </HamburgerMenuContainer>
  )

}














  return (
    <HeaderContainer>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '95%',
        padding: '10px 10px',
        backgroundColor: 'transparent',
        zIndex: '1000',
      }}>
        <HamburgerMenu showHamburger={showHamburger} />
      <div className="logo animate__animated animate__fadeInLeft" onClick={scrollToHome}>
        <img src={logo} alt="logo" className='imgLOGO' />
        <img src={iedcLogo} alt="iedcLogo" className='imgIedcLogo' />
      </div>
      <div className="links animate__animated animate__fadeInRight">
        <a className='link' onClick={scrollToHome}>Home</a>
        <a className='link' onClick={scrollToAnoucements}>Events</a>
        <a className='link'>Execom</a>
        <a className='link' onClick={scrollToTestimonials}>Testimonials</a>
        <a className='Joinbtn'>Join Us</a>
        <img src={hamburger} alt="hamburger" className="hamburgerBtn" onClick={handleHamburger} />
      </div>
      </div>
      
    </HeaderContainer>
  )
}


export default Header

const HeaderContainer = styled.nav`
position:fixed;
top: 0;
padding: 10px 10px;
width:100svw;
display: flex;
justify-content: center;
align-items: center;
height: 50px;
background-color: transparent;
backdrop-filter: blur(10px);
box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.1);
z-index: 1000;


.logo {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 10%;
  z-index: 20;
  margin-left: 15px;

  .imgLOGO{
    width: 40px;
    height: 40px;
  }

  .imgIedcLogo{
    width: 70px;
    height: 70px;
  }
}


.links {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  padding: 0 10px;
  .link{
    color: #000000;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
    margin: 0 10px;
    cursor: pointer;
    text-decoration: none;
    display: block;
  }
  .Joinbtn{
   background-color: #000000;
   color: white;
   font-size: 1.2rem;
    font-weight: bold;
    padding: 10px 15px;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;
  }

  .hamburgerBtn{
    width:30px;
    height: 30px;
    display: none;
    transition: all 0.5s ease;
  }


}

@media (max-width: 768px) {
  .links{

    width:15%;
    justify-content:flex-end;

    .link{
      display: none;
    }
    .Joinbtn{
      display: none;
    }

.hamburgerBtn{
    display: block;
  }

  }

  
}
`

const HamburgerMenuContainer = styled.div`
position: fixed;
top: 0;
left: 0;
height: 100vh;
width: 40vw;
background-color: rgba(255, 255, 255, 0.9);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
z-index:10;
transform: translateX(${props => props.showhamburger==='true' ? 0 : -100}%);
transition: transform 1s ease;

.linksH{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .linkH{
      color: #000000;
      font-size: 1.5rem;
      font-weight: 500;
      padding: 10px;
      margin: 10px;
      cursor: pointer;
      text-decoration: none;
    }
    .JoinbtnH{
      background-color: #000000;
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
      padding: 10px 15px;
      border-radius: 10px;
      cursor: pointer;
      text-decoration: none;
    }

    
}
`