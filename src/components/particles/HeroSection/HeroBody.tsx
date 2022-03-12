import React, { useState } from "react";

import DepartmentTree from "./DepartmentTree";
import BannerCarousel from "./BannerCarousel";
import HeroHeader from "./HeroHeader";

import BannerOne from "../../../assets/images/banners/banner1.jpg"

import { RightOutlined } from "@ant-design/icons";
import styled  from "@emotion/styled";
import jsx from "@emotion/react";

interface PropsType {
    children: JSX.Element
    name: string,
    SelectedBodyComponent: JSX.Element
}
const HeroBodyComponent = styled.div`
    display: flex;
    margin-top: 4px;
    background: #f4f4f7;
    border: none;
    border-radius: 8px;
     &:hover{
        box-shadow: 0 15px 15px #0000ff17;
    }
`;

const DepartmentListWrapper = styled.div`
    width: 20%;
    padding: 14px;
    &:hover{
        border-right: 0.5px solid #0000001c
    }
`;

const DepartmentList = styled.div`
    list-style: none;
    font-size: 16px;
    font-weight: 400;
    line-height: 2.5;
`;

const DepartmentListItem = styled.div`
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    letter-spacing: 0.0275em;
    color: #19191D;
    cursor: pointer;
    &:hover{
        font-weight: 700;
    }
`;

const BannerCarouselComponent = styled.div`
    width: 80%
`;


const HeroBody = (props: PropsType) => {

    const [selectedElement, setSelectedElement] = useState(<BannerCarousel />)

    const mouseOver = () => {
        setSelectedElement(<DepartmentTree />)
    }
    const mouseOut = () =>{
        setSelectedElement(<BannerCarousel />)
    }

    return (
        <HeroBodyComponent>
            <DepartmentListWrapper>
                <div
                    css={{
                        fontWeight: 500,
                        fontSize: 18,
                        marginBottom: 24,
                        color: ' rgb(34, 100, 209)',
                        border: '1px solid rgb(67 73 209 / 16%)',
                        borderRadius: 5,
                        padding: '8px 12px',
                        display: "flex"
                    }}
                >
                    <div css={{ width: "100%",  textAlign: "center" }}>
                        Departments
                    </div>
                </div>
                <DepartmentList onMouseOver={mouseOver} onMouseOut={mouseOut} >
                    <DepartmentListItem>
                        <RightOutlined css={{
                            fontSize: 12,
                            marginRight: 12
                        }}/>

                        Premium Stores
                    </DepartmentListItem>
                    <DepartmentListItem>
                        <RightOutlined css={{
                            fontSize: 12,
                            marginRight: 12
                        }}/>
                        Women
                    </DepartmentListItem>
                </DepartmentList>
            </DepartmentListWrapper>
            <BannerCarouselComponent>
                <HeroHeader />
                <img src={BannerOne} alt="B1" style={{
                    width: '100%',
                    borderRadius: '0 5px 5px 0'
                }}/>
            </BannerCarouselComponent>
        </HeroBodyComponent>
    );
}

export default HeroBody;
