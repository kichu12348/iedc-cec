import React, { useEffect, useState } from "react";
import styled from "styled-components";
import news from "./images/news.svg";
import memeCat from "./images/memeCat.png";
import CarouselSlider from "./partials/slider";

const Team=React.forwardRef((props,ref)=>{
  const [slidesToShow, setSlidesToShow] = useState(4);
  const[faculty,setFaculty]=useState(3)

  useEffect(() => {
    if (window.innerWidth < 768) {
      setSlidesToShow(1);
      setFaculty(1)
    } else if (window.innerWidth < 1024) {
      setSlidesToShow(2);
      setFaculty(3)
    } else {
      setSlidesToShow(4);
      setFaculty(3)
    }
  });

  const slides1 = [
    <CarouselSliderComponent>
      <img src={memeCat} alt="memeCat" />
      <h1>Sherin Joseph</h1>
      <p>Nodal Officer</p>
    </CarouselSliderComponent>,
    <CarouselSliderComponent>
      <img src={memeCat} alt="memeCat" />
      <h1>Darsana S</h1>
      <p>Asst Nodal Officer</p>
    </CarouselSliderComponent>,
    <CarouselSliderComponent>
      <img src={memeCat} alt="memeCat" />
      <h1>Yasim Khan M</h1>
      <p>Ex Nodal Officer</p>
    </CarouselSliderComponent>,
  ];

  const slides2 = [
    <CarouselSliderComponent>
      <img src={memeCat} alt="memeCat" />
      <h1>Ananthu MP</h1>
      <p>Student Lead</p>
    </CarouselSliderComponent>,
    <CarouselSliderComponent>
      <img src={memeCat} alt="memeCat" />
      <h1>hmmm</h1>
      <p>Vice Chairman</p>
    </CarouselSliderComponent>,
    <CarouselSliderComponent>
      <img src={memeCat} alt="memeCat" />
      <h1>hmmmm</h1>
      <p>Secretary</p>
    </CarouselSliderComponent>,
    <CarouselSliderComponent>
      <img src={memeCat} alt="memeCat" />
      <h1>hmmm</h1>
      <p>Secretary</p>
    </CarouselSliderComponent>,
    <CarouselSliderComponent>
      <img src={memeCat} alt="memeCat" />
      <h1>hmmmm</h1>
      <p>Secretary</p>
    </CarouselSliderComponent>,
    <CarouselSliderComponent>
      <img src={memeCat} alt="memeCat" />
      <h1>me</h1>
      <p>Secretary</p>
    </CarouselSliderComponent>,
    <CarouselSliderComponent>
    <img src={memeCat} alt="memeCat" />
    <h1>hmmmm</h1>
    <p>Secretary</p>
  </CarouselSliderComponent>,
  ];
  return (
    <TeamContainer ref={ref}>
      <div className="top">
        <div className="faculty">
          <img src={news} alt="news" className="news" />
          <h1>Faculty</h1>
        </div>
        <div className="cards">
          <CarouselSlider slides={slides1} slidesToShow={faculty} />
        </div>
      </div>
      <div className="top">
        <div className="faculty">
          <img src={news} alt="news" className="news" />
          <h1>The Team</h1>
        </div>
        <div className="cards">
            <CarouselSlider slides={slides2} slidesToShow={slidesToShow} />
        </div>
      </div>
        <div className="top">
            <div className="faculty">
                <img src={news} alt="news" className="news" />
                <h1>The Sub Team</h1>
            </div>
            <div className="cards">
                <CarouselSlider slides={slides2} slidesToShow={slidesToShow} />
            </div>
        </div>
    </TeamContainer>
  );
})

export default Team;

const TeamContainer = styled.div`
  height: auto;
  width: 95vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;

  .top {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;

    .cards {
      height: 50vh;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .faculty {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      img {
        width: 50px;
        height: 50px;
      }

      h1 {
        font-size: 2.5rem;
        font-weight: 340;
        color: #000000;
        margin-left: 20px;
      }
    }
  }

    @media screen and (max-width: 768px) {
        .top {
        .faculty {
            h1 {
            font-size: 1.5rem;
            }
        }
        }
    }
`;

const CarouselSliderComponent = styled.div`
  height: 90%;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 50px;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px 2px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 70%;
    border-radius: 50px;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 340;
    color: #000000;
  }

  p {
    font-size: 1rem;
    font-weight: 340;
    color: #545353;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
    height: 80%;

    h1 {
      font-size: 1.2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;
