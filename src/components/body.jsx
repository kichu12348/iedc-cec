import React from "react";
import styled from "styled-components";
import ThreeDScene from "./3DsTUFF/three";

const Body = React.forwardRef(({ width }, ref) => {
    return (
        <BodyContainer ref={ref}>
            <HomeContainer className="animate__animated animate__fadeInLeft">
                <h1>IEDC CEC</h1>
                <p>Innovation And Entrepreneurship Development Cell Bootcamp CEC</p>
                <a>Join Our Community!</a>
            </HomeContainer>

            <ThreeDScene width={width} />
        </BodyContainer>
    );
});

export default Body;

const BodyContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: transparent;
`;

const HomeContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 10px;
    word-wrap: break-word;
    width: 500px;
  }

  a {
    font-size: 1.5rem;
    font-weight: bold;
    background-color: #000000;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    margin-top: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
