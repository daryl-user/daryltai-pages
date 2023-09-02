import Hero from "../about_components/hero";
import Skills from "../about_components/skills";
import Description from '../about_components/description';
import "./about.css";

export default function About({setPage}) {
    return (
        <div className="about-container">
            <Hero setPage={setPage}/>
            <Description/>
            <Skills/>
        </div>
    )
}