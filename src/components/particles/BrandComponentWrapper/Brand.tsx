import React from "react";
import {Col, Row} from "antd";
import BrandCard from "../../moleques/BrandCard";
import styled from "@emotion/styled";

const BrandWrapper = styled.div`
    padding: 8px;
    border: 1px solid #80808024;
    border-radius: 4px;
    margin: 4px;
`;

class Brand extends React.Component<any, any>{
    render() {

        const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];

        return (
            <BrandWrapper>
                <h3 style={{ paddingLeft: 4 }}>Brands:</h3>
                <Row>
                    {elements.map((value, index) => {
                        return(
                            <Col span={4}>
                                <BrandCard />
                            </Col>
                        )
                    })}
                </Row>
            </BrandWrapper>
        );
    }

}

export default Brand;
