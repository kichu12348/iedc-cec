import Header from "./components/Header";
import Body from "./components/body";
import styled from "styled-components";
import Inspi from "./components/inspi";
import Anoucements from "./components/anouncements";
import { useEffect, useState,useRef } from "react";
import Achivement from "./components/achive";
import WhoWeAre from "./components/whoweare";
import Team from "./components/team";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";


function App() {

  const[width,setWidth]=useState(3)

  //refs
  const bodyRef = useRef(null)
  const inspiRef = useRef(null)
  const anoucementsRef = useRef(null)
  const achivementRef = useRef(null)
  const whoWeAreRef = useRef(null)
  const teamRef = useRef(null)
  const testimonialsRef = useRef(null)

  useEffect(()=>{
    if(window.innerWidth < 768){
      setWidth(2)
      return
    }
    else{
      setWidth(3)
    }
  
  },[window.innerWidth])


  const scrollToHome=()=>{
    bodyRef.current.scrollIntoView({behavior:'smooth'})
  }

  const scrollToInspi=()=>{
    inspiRef.current.scrollIntoView({behavior:'smooth'})
  }

  const scrollToAnoucements=()=>{

    anoucementsRef.current.scrollIntoView({behavior:'smooth'})
  }

  const scrollToAchivement=()=>{

    achivementRef.current.scrollIntoView({behavior:'smooth'})
  }

  const scrollToWhoWeAre=()=>{

    whoWeAreRef.current.scrollIntoView({behavior:'smooth'})
  }

  const scrollToTeam=()=>{

    teamRef.current.scrollIntoView({behavior:'smooth'})
  }

  const scrollToTestimonials=()=>{
    testimonialsRef.current.scrollIntoView({behavior:'smooth'})
  }




  return (
    <MainComponenet>
      <Header 
      scrollToHome={scrollToHome} 
      scrollToInspi={scrollToInspi}
      scrollToAnoucements={scrollToAnoucements}
      scrollToAchivement={scrollToAchivement}
      scrollToWhoWeAre={scrollToWhoWeAre}
      scrollToTeam={scrollToTeam}
      scrollToTestimonials={scrollToTestimonials}
      />
      <Body width={width} ref={bodyRef}/>
      <Inspi ref={inspiRef} />
      <Anoucements ref={anoucementsRef} />
      <Achivement ref={achivementRef} />
      <WhoWeAre ref={whoWeAreRef} />
      <Team ref={teamRef} />
      <Testimonials ref={testimonialsRef} />
      <Footer
       scrollToHome={scrollToHome} 
       scrollToInspi={scrollToInspi}
       scrollToAnoucements={scrollToAnoucements}
       scrollToAchivement={scrollToAchivement}
       scrollToWhoWeAre={scrollToWhoWeAre}
       scrollToTeam={scrollToTeam}
       scrollToTestimonials={scrollToTestimonials}
      />
    </MainComponenet>
    
  );
}

const MainComponenet = styled.div`
height: auto;
  width: 100svw;
  background-color: rgba(255, 255, 255, 0);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  overflow-x: hidden;
`;

export default App;
