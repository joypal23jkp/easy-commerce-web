/** @jsxRuntime classic */
/** @jsx jsx */
import 'antd/dist/antd.css';
import React from "react";
import { jsx } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";

import Routes from "../App/Routes";
import Header from "../components/particles/Header/Header";
import Footer from "../components/particles/Footer/Footer";
import styled from "@emotion/styled";
import "../style.css"

const RootStyledRouter = styled.div`
    max-width: 1268px;
    margin: auto;
`;

export const App: React.FC = (props) => {
    return(
        <BrowserRouter>
            <Header />
            <RootStyledRouter>
                <Routes />
            </RootStyledRouter>
            <Footer />
        </BrowserRouter>
    );
}
