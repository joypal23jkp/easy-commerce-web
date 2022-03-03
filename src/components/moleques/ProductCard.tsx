import React from "react";
import styled from "@emotion/styled";
import { Card, Button } from 'antd';
import {HeartFilled} from "@ant-design/icons";

const PriceWrapper = styled.span`
    color: red;
    font-weight: 700;
    padding-left: 4px;
    font-size: 16px;
    line-height: 36px;
`;

const ActionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8px 4px 4px 4px;
`;

const FavCount = styled.span`
    padding: 4px
`;

const { Meta } = Card;
class ProductCard extends React.Component<any, any>{
    render() {
        return (
            <div>
                <Card
                    hoverable
                    style={{ width: 230, borderRadius: 8, padding: 5 }}
                    bodyStyle={{padding: '4px 0 0 0'}}
                    bordered={true}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <p style={{ paddingTop: 8, fontSize: 16 }}>
                        Vintage Typewriter to post awesome stories about UI design and webdev.
                    </p>
                    only<PriceWrapper>$200 </PriceWrapper>
                    <ActionWrapper>
                        <div>
                            <HeartFilled twoToneColor='#df4141' style={{
                                fontSize: 18
                            }} />
                            <FavCount>3</FavCount>
                        </div>
                        <div>
                            <Button size={"small"} >Add to card</Button>
                        </div>
                    </ActionWrapper>
                </Card>
            </div>
        );
    }
}

export default  ProductCard;
