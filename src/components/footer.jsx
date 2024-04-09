import React from 'react'
import styled from 'styled-components'
import iedcLogoWhite from './images/iedcLogoWhite.svg'
import logoWhite from './images/logoWhite.webp'
import instagram from './images/instagram.svg'
import github from './images/github.svg'
import { useContext } from 'react'
import AudioContext from '../contexts/audioContext'

function Footer({
    scrollToInspi,
    scrollToAnoucements,
    scrollToAchivement,
    scrollToWhoWeAre,
    scrollToTeam,
}) {

const handleRedirect = (url) => {
    window.open(url)
}


const playRick = useContext(AudioContext)


  return (
    <FooterContainer>
      <div className="top">
        <div className="logo">
            <img src={logoWhite} alt="" onClick={playRick}/>
            <img src={iedcLogoWhite} onClick={playRick}/>
            <h3>Contact Swarag</h3>
            <p>hhh@gmail.com</p>
            <p>uhuh@gmail.com</p>
        </div>
        <div className="socialStuff">
            <h3>Follow Us</h3>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row'
            }}>
            <img src={instagram} onClick={()=>handleRedirect('https://www.instagram.com/arcade_.1?igsh=cGFoaGljYzkyaTg%3D&utm_source=qr')}/>
            <img src={github} onClick={()=>handleRedirect('https://github.com/kichu12348')}/>
            </div>
            <div className="links">
                <a onClick={scrollToInspi}>Our Vision</a>
                <a onClick={scrollToAnoucements}>Events</a>
                <a onClick={scrollToAchivement}>Achivements</a>
                <a onClick={scrollToTeam}>Team</a>
                <a onClick={scrollToWhoWeAre}>About</a>
            </div>
            
        </div>
      </div>
        <div className="bottom">
            <p>
              &copy; 2024 Me. No rights reserved  
            </p>
            
        </div>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
 height: auto;
 width: 100vw;
 background-color: #001d36;
 display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    flex-wrap: wrap;

 .bottom{
    width: 95%;
    height:50px;
    border-top: 1px solid rgba(255, 255, 255, 0.5);

    p{
        color: rgba(255, 255, 255, 0.5);
        text-align: center;
        padding: 10px;
        font-size: 1rem;
    }
 }

 .top{
    height:50vh;
    width: 95%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .logo{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 50%;
        img{
            width: 100px;
            height: 100px;
        }

        h3{
            color: rgba(255, 255, 255, 0.9);
            font-weight: 400;
            font-size: 1.5rem;
            padding: 10px;
            margin-bottom: 10px;
        }

        p{
            color: rgba(255, 255, 255, 0.5);
            font-size: 1rem;
            padding: 5px;
        }
    }

    .socialStuff{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        margin-top:15px;
        width: 50%;
        h3{
            color: rgba(255, 255, 255, 0.9);
            font-weight: 400;
            font-size: 1.5rem;
            padding: 10px;
            margin-bottom: 10px;
        }
        img{
            width: 50px;
            height: 50px;
            margin: 10px;
            cursor: pointer;
        }

        .links{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            a{
                color: rgba(255, 255, 255, 0.5);
                font-size: 1.2rem;
                padding: 5px;
                margin: 5px;
                cursor: pointer;
                text-decoration: none;
            }
        }
    }
 }
`