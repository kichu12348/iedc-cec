import React from "react";
import CarouselSlider from "./partials/slider";
import styled from "styled-components";
import news from "./images/news.svg";
import memeCat from "./images/memeCat.png";
import { useState,useEffect } from "react";

const Achivement=React.forwardRef((props,ref)=> {

    const[slidesToShow,setSlidesToShow]=useState(3)

    useEffect(()=>{
    if(window.innerWidth < 768){
      setSlidesToShow(1)
      return
    }
    else{
      setSlidesToShow(3)
    }
},[])



  const slides = [
    <CarouselSliderCompnent>
      <div className="card">
        <img src={memeCat} alt="" />
        <div className="elm2">
          <h2>Ananthu M P - Community Developer for IEDC NEST.</h2>
          <p>
            IEDC BOOTCAMP CEC is thrilled to announce that Ananthu M P, CEO,
            IEDC BOOTCAMP CEC is starting his new position as Community
            Developer for IEDC NEST
          </p>
        </div>
      </div>
    </CarouselSliderCompnent>,
    <CarouselSliderCompnent>
      <div className="card">
        <img
          src={`https://picsum.photos/id/${Math.floor(Math.random()*200+30)}/200`}
          alt=""
        />
        <div className="elm2">
          <h2>Sreelakshmi M - State Creative Lead of IEDC NEST</h2>
          <p>
            Ms. Sreelakshmi M, Student Lead of IEDC Bootcamp CEC was selected as
            the State Creative Lead of IEDC NEST (Network of Entrepreneurs &
            Students’ Team).
          </p>
        </div>
      </div>
    </CarouselSliderCompnent>,
    <CarouselSliderCompnent>
      <div className="card">
        <img
          src={`https://picsum.photos/id/${Math.floor(Math.random()*200+30)}/200`}
          alt=""
        />
        <div className="elm2">
          <h2>SPECIAL MENTION AWARD</h2>
          <p>
            Ms. Sreelakshmi M, CEO of IEDC Bootcamp CEC secured a special
            mention award for the active contribution, commitment, and
            dedication towards Innovators' Premier League 2021 hosted by Kerala
            Startup Mission and IEDC Kerala.
          </p>
        </div>
      </div>
    </CarouselSliderCompnent>,
    <CarouselSliderCompnent>
      <div className="card">
        <img
          src={`https://picsum.photos/id/${Math.floor(Math.random()*200+30)}/200`}
          alt=""
        />
        <div className="elm2">
          <h2>Akshay Pradeep - State Student Lead of IEDC NEST</h2>
          <p>
            Mr. Akshay Pradeep, Creative and Innovations Lead at IEDC Bootcamp
            CEC was selected as the State Lead of IEDC NEST (Network of
            Entrepreneurs & Students’ Team).
          </p>
        </div>
      </div>
    </CarouselSliderCompnent>,
    <CarouselSliderCompnent>
      <div className="card">
        <img
         src={`https://picsum.photos/id/${Math.floor(Math.random()*200+30)}/200`}
          alt=""
        />

        <div className="elm2">
          <h2>Ananthu M P - Community Developer for IEDC NEST.</h2>
          <p>
            IEDC BOOTCAMP CEC is thrilled to announce that Ananthu M P, CEO,
            IEDC BOOTCAMP CEC is starting his new position as Community
            Developer for IEDC NEST
          </p>
        </div>
      </div>
    </CarouselSliderCompnent>,
    <CarouselSliderCompnent>
      <div className="card">
        <img
          src={`https://picsum.photos/id/${Math.floor(Math.random()*200+30)}/200`}
          alt=""
        />
        <div className="elm2">
          <h2>Ananthu M P - Community Developer for IEDC NEST.</h2>
          <p>
            IEDC BOOTCAMP CEC is thrilled to announce that Ananthu M P, CEO,
            IEDC BOOTCAMP CEC is starting his new position as Community
            Developer for IEDC NEST
          </p>
        </div>
      </div>
    </CarouselSliderCompnent>,
    <CarouselSliderCompnent>
      <div className="card">
        <img
          src={`https://picsum.photos/id/${Math.floor(Math.random()*200+30)}/200`}
          alt=""
        />
        <div className="elm2">
          <h2>Ananthu M P - Community Developer for IEDC NEST.</h2>
          <p>
            IEDC BOOTCAMP CEC is thrilled to announce that Ananthu M P, CEO,
            IEDC BOOTCAMP CEC is starting his new position as Community
            Developer for IEDC NEST
          </p>
        </div>
      </div>
    </CarouselSliderCompnent>,
    <CarouselSliderCompnent>
      <div className="card">
        <img
          src={`https://picsum.photos/id/${Math.floor(Math.random()*200+30)}/200`}
          alt=""
        />
        <div className="elm2">
          <h2>Ananthu M P - Community Developer for IEDC NEST.</h2>
          <p>
            IEDC BOOTCAMP CEC is thrilled to announce that Ananthu M P, CEO,
            IEDC BOOTCAMP CEC is starting his new position as Community
            Developer for IEDC NEST
          </p>
        </div>
      </div>
    </CarouselSliderCompnent>,
    <CarouselSliderCompnent>
      <div className="card">
        <img
          src={`https://picsum.photos/id/${Math.floor(Math.random()*200+30)}/200`}
          alt=""
        />
        <div className="elm2">
          <h2>Ananthu M P - Community Developer for IEDC NEST.</h2>
          <p>
            IEDC BOOTCAMP CEC is thrilled to announce that Ananthu M P, CEO,
            IEDC BOOTCAMP CEC is starting his new position as Community
            Developer for IEDC NEST
          </p>
        </div>
      </div>
    </CarouselSliderCompnent>,
  ];

  return (
    <AchivementContainer ref={ref}>
      <div className="top">
        <img src={news} alt="News" />
        <h1>Achivements</h1>
      </div>
      <div className="bottom">
        <CarouselSlider slides={slides} arrow={'false'} slidesToShow={slidesToShow} />
      </div>
    </AchivementContainer>
  );
})

export default Achivement;

const AchivementContainer = styled.div`
  height: 85vh;
  width: 95vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  .top {
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    img {
      width: 50px;
      height: 50px;
      border-radius: 10px;
    }

    h1 {
      font-size: 2.5rem;
      font-weight: 340;
      color: #000000;
      margin-left: 20px;
    }
  }

  .bottom {
    width: 100%;
    height: 90%;
  }
`;

const CarouselSliderCompnent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    height: 80%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    box-shadow: 1px 0px 6px 6px rgba(0, 0, 0, 0.1);
    padding: 10px;
    gap: 10px;

    img {
      width: 100%;
      height: 50%;
      border-radius: 10px;
    }

    .elm2 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap:20px;

      h2 {
        font-size: 1.5rem;
        font-weight: 700;
        color: #000000;
        text-align: center;
      }

      p {
        font-size: 1rem;
        font-weight: 500;
        color: #717171;
        text-align: center;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .card {
        width: 80%;
    }
  }
`;
