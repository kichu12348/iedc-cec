import React from "react";
import styled from "styled-components";
import news from "./images/news.svg";
import cecBlueprint from "./images/cecBlueprint.webp";
import { useState } from "react";

const WhoWeAre=React.forwardRef((props,ref)=>{

  //statevariable to store the current state of the component
  const [content, setContent] = useState(
    <p>
      The mission of The Innovation and Entrepreneurship Development Centre
      (IEDC) is to promote innovation and entrepreneurship by creating a culture
      of entrepreneurship in educational institutions. It aims to create
      awareness, provide incubation support, develop skills, and promote
      collaboration between industries and academia to foster the creation of
      successful ventures that contribute to the economic growth of the country.
    </p>
  );
  const [mission, setMission] = useState(true);
  const [objectives, setObjectives] = useState(false);
  const [weCell, setWeCell] = useState(false);

  const handleMission = () => {
    setContent(
      <p>
        The mission of The Innovation and Entrepreneurship Development Centre
        (IEDC) is to promote innovation and entrepreneurship by creating a
        culture of entrepreneurship in educational institutions. It aims to
        create awareness, provide incubation support, develop skills, and
        promote collaboration between industries and academia to foster the
        creation of successful ventures that contribute to the economic growth
        of the country.
      </p>
    );
    setMission(true);
    setObjectives(false);
    setWeCell(false);
  };

  const handleObjectives = () => {
    setContent(
      <p>
        The Innovation and Entrepreneurship Development Centre (IEDC) is a
        platform that provides support and guidance to students and faculty to
        foster entrepreneurship. Its primary objective is to create an
        entrepreneurial culture in educational institutions. This is achieved by
        creating awareness, providing incubation support to startups, developing
        skills through training and mentorship programs, and promoting
        collaboration between industries and academia. IEDCs play a vital role
        in fostering entrepreneurship, and it is essential for educational
        institutions to establish them to promote innovation and
        entrepreneurship.
        <br />
        <br />- Promote entrepreneurial mindset: The club aims to encourage
        students to adopt an entrepreneurial mindset by thinking creatively,
        identifying opportunities, and taking calculated risks.
        <br />
        <br />- Skill development: The club focuses on developing practical
        skills necessary for entrepreneurship, such as leadership,
        problem-solving, communication, teamwork, and business management.
        <br />
        <br />- Knowledge sharing: The club organizes events where successful
        entrepreneurs and industry experts share their experiences, insights,
        and knowledge with students, helping them gain a better understanding of
        entrepreneurship.
        <br />
        <br />- Networking opportunities: The club facilitates events and
        activities that allow students to connect with fellow entrepreneurs,
        mentors, investors, and professionals from various industries, enabling
        valuable networking opportunities.
        <br />
        <br />- Incubation and support: The club provides support to students in
        launching their startup ventures, offering resources, mentorship,
        guidance on business planning, and access to funding opportunities.
      </p>
    );
    setMission(false);
    setObjectives(true);
    setWeCell(false);
  };

  const handleWeCell = () => {
    setContent(
      <p>
        Women Entrepreneurship Cell A world of million opportunities awaits
        outside and this is one of the very few chances to grab the heights.
        Stay ahead of your league by making the first step into the world of
        women entrepreneurship. IEDC Bootcamp College of Engineering, Chengannur
        launches Women Entrepreneurship Cell a Women Lead Initiative coming to
        you in a new face and new structure with the perfect lineup of the best
        to leave you spellbound. Prime yourself for mind-boggling WE experience!
      </p>
    );
    setMission(false);
    setObjectives(false);
    setWeCell(true);
  };

  return (
    <WhoWeAreContainer ref={ref}>
      <div className="top">
        <img src={news} alt="" />
        <h1>Who We Are</h1>
      </div>
      <div className="bottom">
        <div className="card">
          <p>
            The Innovation and Entrepreneurship Development Cell [IEDC] Bootcamp
            College of Engineering Chengannur was established in June 2015 in
            association with Kerala Startup Mission [KSUM], with the vision of
            molding youngsters into technological entrepreneurs and innovative
            leaders. KSUM serves as a stepping stone for aspiring business
            owners looking to enter the field of technology-based jobs and
            supports entrepreneurs in pursuing their goals.
          </p>
          <p>
            IEDC CEC promotes entrepreneurship, cultivates an innovative
            attitude, and encourages students to pursue their passion. The cell
            organizes myriad programs that will inspire young, aspiring
            technology graduates to pursue entrepreneurship as a profession and
            become job providers rather than job seekers.
          </p>
          <img src={cecBlueprint} />
        </div>
        <div className="objectives">
          <div className="buttons">
            <button onClick={handleMission}>
              <p>Our Mission</p>
              <div
                className="basePlate"
                style={{
                  backgroundColor: mission ? "#000000" : "#ffffffff",
                }}
              ></div>
            </button>
            <button onClick={handleObjectives}>
              <p>Objectives</p>
              <div
                className="basePlate"
                style={{
                  backgroundColor: objectives ? "#000000" : "#ffffffff",
                }}
              ></div>
            </button>
            <button onClick={handleWeCell}>
              <p>We Cell</p>
              <div
                className="basePlate"
                style={{
                  backgroundColor: weCell ? "#000000" : "#ffffffff",
                }}
              ></div>
            </button>
          </div>
          <div className="content">{content}</div>
        </div>
      </div>
    </WhoWeAreContainer>
  );
})

export default WhoWeAre;

const WhoWeAreContainer = styled.div`
  height: auto;
  width: 95vw;

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
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;

    .card {
      width: 90%;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      padding: 10px;
      border-radius: 10px;
      margin-top: 20px;
      box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);

      p {
        font-size: 1.2rem;
        font-weight: 300;
        color: #343434;
        margin: 10px 0;
        text-align: center;
      }

      img {
        width: 100%;
        height: auto;
        border-radius: 10px;
        margin: 10px 0;
      }
    }

    .objectives {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .buttons {
        width: 100%;
        height: 10%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;

        button {
          width: 30%;
          height: 100%;
          background-color: #ffffffff;
          border: none;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          cursor: pointer;

          p {
            font-size: 1.2rem;
            font-weight: 500;
            color: #000000;
          }

          .basePlate {
            width: 30%;
            height: 5px;
            background-color: #000000;
            border-radius: 10px;

            @media screen and (max-width: 768px) {
              width: 75%;
            }
          }
        }
      }

      .content {
        width: 80%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        p {
          font-size: 1.2rem;
          font-weight: 300;
          color: #343434;
          margin: 20px 0;
          text-align: left;
          word-wrap: break-word;
        }
      }
    }
  }
`;
