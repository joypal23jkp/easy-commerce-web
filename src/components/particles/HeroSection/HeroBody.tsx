import React, { useState } from "react";
import BannerOne from "../../../assets/images/banners/banner1.jpg"

import styled  from "@emotion/styled";
import { jsx } from "@emotion/react";


interface PropsType {
    children: JSX.Element
    name: string,
    SelectedBodyComponent: JSX.Element
}

const HeroBodyComponent = styled.div`
    display: flex;
    margin-top: 4px;
    background: transparent;
    border: none;
    border-radius: 8px;
`;

const BannerCarouselComponent = styled.div`
    width: 100%
`;


const HeroBody = (props: PropsType) => {
    return (
        <HeroBodyComponent>
             <BannerCarouselComponent>
                {/*<HeroHeader />*/}
                <img src={BannerOne} alt="B1" style={{
                    width: '100%',
                    borderRadius: '0 5px 5px 0'
                }}/>
            </BannerCarouselComponent>
        </HeroBodyComponent>
    );
}

export default HeroBody;
