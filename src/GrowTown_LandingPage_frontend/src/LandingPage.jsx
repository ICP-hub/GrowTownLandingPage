import * as React from "react"
import Header from "./Components/Header";
import HeroComp from "./Components/HeroComp";
import { VideoComp } from "./Components/VideoComp";
import About from "./Components/About";
import Characters from "./Components/Characters";
import Gameplay from "./Components/Gameplay1";
import Gameplay2 from "./Components/Gameplay2";
import Footer from "./Components/Footer";
const LandingPage = ()=>{

    return(
      <div className=" w-screen">
        <Header/>
        <HeroComp/>
        <VideoComp/>
        <About/>
        <Characters/>
        <Gameplay/>
        <Gameplay2/>
       <Footer/>
      </div>
    )

}
export default LandingPage;