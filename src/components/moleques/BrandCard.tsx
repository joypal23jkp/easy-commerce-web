import React from "react";
import {SlackSquareFilled} from "@ant-design/icons";
import styled from "@emotion/styled";

const Brand = styled.div`
    text-align: center;
    padding: 12px;
    border: 1px solid #80808024;
    border-radius: 4px;
    margin: 4px;
}

`;

class BrandCard extends React.Component<any, any>{

    render() {
        return (
            <Brand>
                <SlackSquareFilled style={{ fontSize: 32 }}/>
            </Brand>
        );
    }

}

export default BrandCard;
