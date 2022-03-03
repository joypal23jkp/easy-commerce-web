import React, {Component} from "react";
import { Select}  from "antd";
const { Option } = Select;

const provinceData = ['Select Category', 'Zhejiang', 'Jiangsu'];

class SelectComponent extends Component<any, any>{
    render() {
        const handleProvinceChange = (value: any) => {
            console.log(value);
        }
        // @ts-ignore
        return (
            <>
                <Select defaultValue={provinceData[0]} style={{ width: 150 }} bordered={false} onChange={handleProvinceChange}>
                    {provinceData.map((province:string) => (
                        <Option key={province}>{province}</Option>
                    ))}
                </Select>
            </>
        );
    }
}

export default SelectComponent;
