import * as React from "react";
import {
    Route,
    Routes
} from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/Auth/LoginPage";
import { RegisterPage } from "../pages/Auth/RegisterPage";
import IndividualProductPage from "../pages/IndividualProductPage";

const Routers = () =>{
    return (
        <Routes>

            {/*Auth Routes*/}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/*Main Routes*/}
            <Route path="/" element={<HomePage/>} />
            <Route path="product">
                <Route path=":productId" element={<IndividualProductPage />} />
            </Route>

        </Routes>
    );
}
export default Routers;
