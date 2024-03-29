import React from "react";
import styled from "styled-components";
import news from "./images/news.svg";
import memeCat from "./images/memeCat.png";

const Testimonials=React.forwardRef((props,ref)=> {
  return (
    <TestimonialsContainer ref={ref}>
      <div className="top">
        <img src={news} alt="news" />
        <h1>Testimonials</h1>
      </div>
      <div className="bottom">
        <div className="left">
        <div className="testimony animate__animated animate__fadeInLeft">
          <p>
            "The opportunity to be a part of IEDC was a life-changing moment for
            me. Leading a great team, receiving guidance from experienced
            seniors, and heading the forum made me feel proud and honored. I
            believe I fulfilled my role well. To future participants, I assure
            you that this platform is ideal for showcasing your potential and
            discovering your passion."
          </p>
          <div className="user">
            <span>
              <h3>Vimal K R</h3>
              <p>2019-2020 CEO IEDC</p>
            </span>
            <img src={memeCat} />
          </div>
        </div>
        <div className="testimony animate__animated animate__fadeInLeft">
          <p>
          "The Family who supported and scaled up me to the state level lead of Kerala Startup Mission. IEDC CEC and its team is always there to upskill me and guide me to follow my entrepreneurial journey. One of the valuable things of CEC"
          </p>
          <div className="user">
            <span>
              <h3>Akshay S Pradeep</h3>
              <p>2021-2022 State Student Lead ,IEDC NEST</p>
            </span>
            <img src={memeCat} />
          </div>
        </div>
        </div>
        <div className="right">
           <div className="testimony animate__animated animate__fadeInRight">
          <p>
          "IEDC BOOTCAMP CEC has been a catalyst for my personal and professional growth. Joining IEDC BOOTCAMP CEC was life-changing, fueling my passions and skills. The pandemic design workshop sparked my creativity. From a participant to Technical Analyst and Student Lead, I thrived with team support. Being the Creative Lead for Innovator's Premier League 1.0 and State Creative Lead of IEDC NEST were milestones. Thank you, IEDC CEC, for empowering me. I am confident the platform's future will uplift countless aspiring individuals."
          </p>
          <div className="user">
            <span>
              <h3>Sreelakshmi M</h3>
              <p>2021-2022 - Student Lead</p>
            </span>
            <img src={memeCat} />
          </div>
        </div>
        <div className="testimony animate__animated animate__fadeInRight">
          <p>
          "I got the opportunity to work with IEDC for about two years. It gave me a platform to exhibit aptitude and develop a better personality. Your ideas are never unheard of in IEDC, there is always a space to improve and implement. Vital part of this forum was teamwork, we acknowledged our work ,resolved the confusion and we made a strong team. The whole team was inspiring and taught me to carve out the best of me. Events and workshops conducted were incredible experiences which taught me new things. The whole journey took me by surprise of events that changed my whole perspective to deal with certain challenging situations. I'm grateful to my seniors in IEDC for mentoring us. I assure you that IEDC is the right place to ignite your skills."
          </p>
          <div className="user">
            <span>
              <h3>Ahalya A Kumar</h3>
              <p>2020-2021 Chief Social Officer</p>
            </span>
            <img src={memeCat} />
          </div>
        </div> 
        </div>
        
      </div>
    </TestimonialsContainer>
  );
})

export default Testimonials;

const TestimonialsContainer = styled.div`
  height: auto;
  width: 95vw;

  .top {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    margin-bottom: 20px;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;

    .right,.left{
        width: 45%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        flex-wrap: wrap;
    }

    .testimony {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px;
      border-radius: 20px;
      box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
      background-color: #ffffff;
      transition: 0.5s;

      p {
        font-size: 1.2rem;
        font-weight: 300;
        color: #000000;
        text-align: center;
      }

      .user {
        width: 90%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        span {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          margin-right: 10px;

          h3 {
            font-size: 1.2rem;
            font-weight: 700;
            color: #000000;
          }
          p {
            font-size: 1rem;
            font-weight: 300;
            color: #444444;
          }
        }
        img {
          width: 50px;
          height: 50px;
          border-radius: 50px;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .bottom {
      justify-content: center;
        gap: 20px;
      .right,.left{
        width: 90%;
      }
    }
  }
`;
