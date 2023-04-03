
//Navigation
import { Link } from "react-router-dom";

//Pages Data
const pages = require("../Configurations/Pages.json")

const buildMenu = () => {

    //
    const links = [];

    pages.forEach((page) => {
        links.push(<Link to={'/' + page} key={page}><li>{page}</li></Link>)
    })
    console.log(links);
    return links;
}

const Menu = () => {

    const menu = buildMenu();

    return <ul className="mmenu">
        {menu}
        {/* <li>{pages[0]}</li>
        <Link to={'/Login'}><li>Login</li></Link>
        <Link to={'/Register'}><li>Register</li></Link>
        <Link to={'/Game'}><li>Game</li></Link>
        <Link to={'/Leaderboard'}><li>Leaderboard</li></Link>
        <Link to={'/Help'}><li>Help</li></Link>
        <Link to={'/Contact'}><li>Contact</li></Link> */}
    </ul >
};

export default Menu;