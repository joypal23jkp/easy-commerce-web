import React from "react";
import ProductCard from "../../moleques/ProductCard";
import styled from "@emotion/styled";
const FeatureWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 12px;
    padding-bottom: 12px;
`;

class FeatureCarousel extends React.Component<any, any>{
    render() {
        const elements = [1, 2, 3, 4, 5];
        return(
            <FeatureWrapper>
                {elements.map((value, index) => {
                    return <ProductCard key={index} />
                })}

            </FeatureWrapper>
        );
    }
}

export default FeatureCarousel;
