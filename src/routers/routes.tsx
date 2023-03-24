import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "@pages/HomePage";
import WatchPage from "@pages/WatchPage/WatchPage";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/watch",
                element: <WatchPage />
            }
        ]
    }
])


export default routes;