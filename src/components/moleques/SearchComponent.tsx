import React from "react";
import { Input } from "antd";
// @ts-ignore
import SearchImage from '../../assets/images/search.png';

class SearchComponent extends React.Component<any, any>{

    render() {
        return (
            <>
                <Input
                    placeholder="search here"
                    allowClear
                    bordered={false}
                    style={{ width: "63%", height: "100%", fontFamily: "'Inter', sans-serif", padding: 0, margin: "0 0 0 12px",alignItems: "center" }}
                />
                <img src={SearchImage} alt="SearchImage" style={{ height: "100%", width: "7%" }} />
            </>
        );
    }

}

export default SearchComponent;
