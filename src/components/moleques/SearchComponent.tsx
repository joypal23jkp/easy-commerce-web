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
                    style={{ width: "70%", fontFamily: "'Inter', sans-serif" }}
                />
                <img src={SearchImage} alt="SearchImage" />
            </>
        );
    }

}

export default SearchComponent;
