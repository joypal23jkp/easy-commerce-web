import React from "react";
import FeatureCarousel from "./FeatureCarousel";
import styled from "@emotion/styled";
import {css} from "@emotion/react";
import data from "../../../helpers/data";
const FeatureWrapper = styled.div`
    padding-top: 24px;
`

class Feature extends React.Component<any, any>{
    render() {
        return (
            <div>
                {
                    data.map((value, index) => {
                        return (
                            <FeatureWrapper key={index}>
                                <h2 css={css`color: #384047; font-weight: bold; margin: 0;`}> {value} </h2>
                                <FeatureCarousel />
                            </FeatureWrapper>
                        )
                    })
                }
            </div>
        );
    }
}

export default Feature;
