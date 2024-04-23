import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/users/homePage";
import ProfilePage from "./pages/users/proflePage";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/users/theme/masterLayout";
import Learn from "./pages/users/Learn";
import P1 from "./pages/users/P1";
import P2 from "./pages/users/P2";
import Table from "./pages/users/Table";
import About from "./pages/users/About";
import Admin from "./pages/users/Admin";

const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage />
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: <ProfilePage />
        },
        {
            path: ROUTERS.USER.LEARN,
            component: <Learn />
        },
        {
            path: ROUTERS.USER.TABLE,
            component: <Table />
        },
        {
            path: ROUTERS.USER.TABLE1,
            component: <P1 />
        },
        {
            path: ROUTERS.USER.TABLE2,
            component: <P2 />
        },
        {
            path: ROUTERS.USER.ABOUT,
            component: <About />
        },
        {
            path: ROUTERS.USER.ADMIN,
            component: <Admin />
        },
    ];

    return (
    <MasterLayout>
        <Routes>
            {
                userRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component}/>
                ))
            }
        </Routes>
    </MasterLayout>
    )
}

const RouterCustom = () => {
    return renderUserRouter();
};

export default RouterCustom;