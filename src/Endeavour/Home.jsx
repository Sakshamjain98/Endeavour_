// import Landing from "./Component/LandingPage/LandingPage"
import About from "./Component/About/About"
import Sponser from "./Component/Sponsers/Sponsers"
import Speaker from "./Component/Speaker/SpeakerCard"
import Count from "./Component/Counter/NewCounter"
import Event from "./Component/Event/NewEvent"
import FAQ from "./Component/FAQs/Faq2"
function Home() {
    return (
        <div  className="overflow-hidden overflow-x-hidden">
            {/* <Landing></Landing> */}
            <About></About>
            <Count></Count>
            <Speaker></Speaker>
            <Sponser></Sponser>
            <Event></Event>
            <FAQ></FAQ>
        </div>
    );
}

export default Home;