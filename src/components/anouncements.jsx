import React from "react";
import styled from "styled-components";
import news from "./images/news.svg";
import SimpleSlider from "./partials/slider";
import memeCat from "./images/memeCat.png";

const Announcements=React.forwardRef((props,ref)=> {
  const slides = [
    <CarouselSliderCompnent ref={ref}>
           <div className="card">
        <img src={memeCat} alt="" />
        <div className="elm2">
           <h2>Hack League</h2>
        <p>
          IEDC WE Cell is here with Introduction to JavaScript, 5-day workshop
          to learn to use JS and create dynamic and interactive web pages. The
          session will be handled by Nandkishor Fullstack web developer,
          Freelancer. Closed TechForge Get ready to unleash your skills and
          join us in TechForge the daily challenge by IEDC Bootcamp CEC. Whether
          you are a hardware enthusiast, a coding whiz, or a design guru, there
          is something for everyone! Closed Design Workshop As part of WE_WEEK
          IEDC We Cell is here with an exciting Design Workshop to aid you to
          create stunning designs using Figma.Whether you're a beginner or an
          experienced designer, you'll walk away with skills, experience, and
          valuable insights from our experienced mentor Sreelakshmi M, State
          Creative Lead IEDC NEST.
        </p> 
        </div>
        
      </div>
    </CarouselSliderCompnent>,
    <CarouselSliderCompnent>
            <div className="card">
        <img src={memeCat} alt="" />
        <div className="elm2">
           <h2>Hack League</h2>
        <p>
          IEDC WE Cell is here with Introduction to JavaScript, 5-day workshop
          to learn to use JS and create dynamic and interactive web pages. The
          session will be handled by Nandkishor Fullstack web developer,
          Freelancer. Closed TechForge Get ready to unleash your skills and
          join us in TechForge the daily challenge by IEDC Bootcamp CEC. Whether
          you are a hardware enthusiast, a coding whiz, or a design guru, there
          is something for everyone! Closed Design Workshop As part of WE_WEEK
          IEDC We Cell is here with an exciting Design Workshop to aid you to
          create stunning designs using Figma.Whether you're a beginner or an
          experienced designer, you'll walk away with skills, experience, and
          valuable insights from our experienced mentor Sreelakshmi M, State
          Creative Lead IEDC NEST.
        </p> 
        </div>
        
      </div>
    </CarouselSliderCompnent>,
    <CarouselSliderCompnent>
          <div className="card">
        <img src={memeCat} alt="" />
        <div className="elm2">
           <h2>Hack League</h2>
        <p>
          IEDC WE Cell is here with Introduction to JavaScript, 5-day workshop
          to learn to use JS and create dynamic and interactive web pages. The
          session will be handled by Nandkishor Fullstack web developer,
          Freelancer. Closed TechForge Get ready to unleash your skills and
          join us in TechForge the daily challenge by IEDC Bootcamp CEC. Whether
          you are a hardware enthusiast, a coding whiz, or a design guru, there
          is something for everyone! Closed Design Workshop As part of WE_WEEK
          IEDC We Cell is here with an exciting Design Workshop to aid you to
          create stunning designs using Figma.Whether you're a beginner or an
          experienced designer, you'll walk away with skills, experience, and
          valuable insights from our experienced mentor Sreelakshmi M, State
          Creative Lead IEDC NEST.
        </p> 
        </div>
        
      </div>
    </CarouselSliderCompnent>,
    <CarouselSliderCompnent>
         <div className="card">
        <img src={memeCat} alt="" />
        <div className="elm2">
           <h2>Hack League</h2>
        <p>
          IEDC WE Cell is here with Introduction to JavaScript, 5-day workshop
          to learn to use JS and create dynamic and interactive web pages. The
          session will be handled by Nandkishor Fullstack web developer,
          Freelancer. Closed TechForge Get ready to unleash your skills and
          join us in TechForge the daily challenge by IEDC Bootcamp CEC. Whether
          you are a hardware enthusiast, a coding whiz, or a design guru, there
          is something for everyone! Closed Design Workshop As part of WE_WEEK
          IEDC We Cell is here with an exciting Design Workshop to aid you to
          create stunning designs using Figma.Whether you're a beginner or an
          experienced designer, you'll walk away with skills, experience, and
          valuable insights from our experienced mentor Sreelakshmi M, State
          Creative Lead IEDC NEST.
        </p> 
        </div>
        
      </div>
    </CarouselSliderCompnent>,
  ];

  return (
    <AnnouncementsContainer>
      <div className="top">
        <img src={news} alt="News" />
        <h1>Announcements</h1>
      </div>
      <div className="bottom">
        <SimpleSlider slides={slides} arrow={"false"} slidesToShow={1} />
      </div>
    </AnnouncementsContainer>
  );
}
)
export default Announcements;

const AnnouncementsContainer = styled.div`
  height: 90vh;
  width: 95vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  .top {
    height: 10%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

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

  .bottom {
    height: 85%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    .top {
      margin-bottom: 20px;
      width: 90%;

      h1 {
        font-size: 2.5rem;
        width: 90%;
      }
    }

    .bottom {
      width: 90%;
      margin-bottom: 20px;
    }
  }
`;

const CarouselSliderCompnent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
.card{
    width:60%;
    height: 80%;
    padding: 10px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    box-shadow: 1px 4px 6px 2px rgba(0, 0, 0, 0.1);

    img{
        width: 50%;
        height: 50%;
    }

    .elm2{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 10px;
        max-width: 60%;

        h2{
            font-size: 1.5rem;
            font-weight: 700;
            color: #000000;
        }

        p{
            font-size: 1rem;
            font-weight: 500;
            color: #717171;
            text-align: left;
            word-wrap: break-word;
            
        }
    }
}


@media screen and (max-width: 768px) {
    .card{
        width: 95%;
        height: 80%;
        flex-direction: column;
        gap: 10px;
        img{
            width: 80%;
            height: 40%;
        }
        .elm2{
            max-width: max-content;
            width: 100%;
            height: 60%;
            align-items: center;

            p{
                text-align: center;
                font-size: 0.8rem;
            }

        }
    }
}
`;
