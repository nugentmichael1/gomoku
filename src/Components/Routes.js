
//Pages
import Home from "../Pages/Home"
import Login from "../Pages/Login"

//Navigation
import { Route, Routes } from "react-router-dom";

//Configuration
import PagesData from "../Configurations/Pages.json"

const buildRouteList = () => {

    const RouteList = [];

    PagesData.forEach((page) => {
        // const component = { "<" + page + "/>" };
        // const temp = "<" + page + "/>";
        const component = eval(page);
        // console.log(temp)
        RouteList.push(<Route path={'/' + page}
            element={page}
            key={page} />);
    });

    return <Routes>{RouteList}</Routes>

};

// const buildElement = (element) => {
//     return < { element } />
// };

const PageRoutes = () => {
    return buildRouteList();
    // <Routes>
    //     <Route path='/' element={<Home />} />
    //     <Route path='/Home' element={<Home />} />
    //     <Route path='/Login' element={<Login />} />
    //     <Route path='/Contact' element={<Home />} />
    // </Routes>
};

export default PageRoutes;