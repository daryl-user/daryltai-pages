import "./hero.css";
import Animation from "./hero-animation";


export default function Hero({setPage}) {


    const handleClickScroll = () => {
        const element = document.getElementById('description');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    

    return (
        <div className="hero-container">
            <Animation></Animation>
            <div className="hero-text">
                <h2>
                    Hello, I am
                </h2>
                <h1>
                    <span className="highlight">Daryl Tai</span>
                </h1>
                <p> 
                    <span className="highlight">Aerospace Engineering</span> undergraduate with an interest in information technology.
                </p>
                <div className="buttons">
                    <button onClick={handleClickScroll}>Learn More</button>
                    <button onClick={()=>{setPage("contact")}}>Contact</button>
                </div>
            </div>
            <div className="hero-image"></div>
        </div>
    )
}