
//Navigation
import { Link } from "react-router-dom";

//Pages data
const pages = require("../Configurations/Pages.json")

const buildLinksList = () => {

    const links = [];

    pages.forEach((page) => {
        links.push(
            <Link to={'/' + page} key={page}>
                <li>
                    {page}
                </li>
            </Link>
        )
    })


    return links;
}

export default buildLinksList