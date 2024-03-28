import React from 'react'
import styled from 'styled-components'
import bulb from './images/bulb.svg'
import entrepreneur from './images/entreprenur.svg'
import tech from './images/tech.svg'

const Inspi=React.forwardRef((props,ref)=>{
  return (
    <InspiContainer ref={ref}>
        <div className="top">
            <h1>"THE BEST WAY TO PREDICT THE FUTURE IS TO INVENT IT."</h1>
            <p>-Alan Kay</p>
        </div>
        <div className="bottom">
          <div className="card animate__animated animate__fadeInLeft animate__delay-1s">
            <img src={bulb}/>
            <h2>Innovation</h2>
            <p>As a leading innovation hub, we are committed to fostering a culture of creativity and out-of-the-box thinking. We offer a range of programs and services designed to support innovators at all stages of their journey, from ideation to commercialization.</p>
          </div>
          <div className="card animate__animated animate__fadeInLeft animate__delay-2s">
            <img src={entrepreneur}/>
            <h2>Entrepreneurship</h2>
            <p>Our organization is dedicated to fostering a culture of entrepreneurship in our local community. We partner with universities and incubators to provide mentorship and resources to aspiring entrepreneurs.</p>
          </div>
          <div className="card animate__animated animate__fadeInLeft animate__delay-2s">
            <img src={tech}/>
            <h2>Technology</h2>
            <p>Our organization is dedicated to helping individuals and businesses stay ahead of the curve in the rapidly evolving world of technology. We host regular workshops and panel discussions that explore the latest trends and technologies shaping the industry.</p>
          </div>
        </div>
    </InspiContainer>
  )
})

export default Inspi

const InspiContainer = styled.div`
height:auto;  
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
background-color: #ffffff;


.top{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 50%;
    h1{
        font-size: 3.75rem;
        font-weight: 700;
        color: #000000;
        width: 500px;
        text-align: center;
    }
    p{
        font-size: 1rem;
        font-weight: 500;
        color: #000000;
    }
}

.bottom{
  height: auto;
  width: 95vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  .card{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 300px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 1px 4px 6px 2px rgba(0, 0, 0, 0.1);
    padding:10px;
    img{
        width: 100px;
        height: 100px;
    }
    h2{
        font-size: 1.5rem;
        font-weight: 700;
        color: #000000;
    }
    p{
        font-size: 1rem;
        font-weight: 500;
        color: #717171;
        text-align: center;
    }
  }
}


@media screen and (max-width: 768px) {
    .top{
      margin-bottom: 20px;
        width: 90%;
        h1{
            font-size: 2.5rem;
            width: 90%;
        }
    }

    .bottom{
        width: 90%;
        margin-bottom: 20px;
        .card{
            width: 90%;
            height: 400px;
            img{
                width: 80px;
                height: 80px;
            }
            h2{
                font-size: 1.25rem;
            }
            p{
                font-size: 0.9rem;
            }
        }
    }
}
`
