// Main (Landing) Page

//Components
import Menu from "../Components/Menu";

//Assets
import FSLogo from "../Assets/CSUFresnoLogo.png"
import FSBulldog from "../Assets/FresnoStateBulldog.png";

//CSS
import "../CSS/Main.css"


const Home = () => {
    return <div className="home">
        <img src={FSLogo} id="homeFSLogo" alt="Fresno State Logo" />
        <h1>Gomoku!</h1>
        <img src={FSBulldog} id="bd1" alt="Bulldog Logo" />
        <Menu />
        <img src={FSBulldog} id="bd2" alt="Bulldog Logo" />
    </div>
};

export default Home;