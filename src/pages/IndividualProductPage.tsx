import {Fragment} from "react";
import React from "react";
import {Carousel, Rate} from "antd";

class IndividualProductPage extends React.Component<any, any>{

    constructor(props:any) {
        super(props);
        this.state = {
            value: 3,
        }
    }

    handleChange = (value: any) => {
        this.setState({ value });
    };


    render() {
        const contentStyle = {
            height: '160px',
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
            background: '#364d79',
        };

        let desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

        return (
            <Fragment>
                <small>12th January 2022</small>
                <div className="product-catalog">
                    <div className="left-catalog">
                        <Carousel>
                            <div>
                                <h3 style={contentStyle}>1</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>2</h3>
                            </div>
                        </Carousel>
                    </div>
                    <div className="right-catalog">
                         <span>
                             <Rate tooltips={desc} onChange={this.handleChange} value={this.state.value} />
                             {this.state.value ? <span className="ant-rate-text">{desc[this.state.value - 1]}</span> : ''}
                        </span>
                        <strong>Brand: The Black Trade</strong>
                        <h5>The Black Trade Hooded Sweatshirt</h5>
                        <h3>
                            29.99 EUR
                            <span>34.99 EUR</span>
                            <span>14.29%</span>
                        </h3>
                        <hr/>
                        <div className="color">
                            <small>Color</small>
                            <div>
                                <span>Black</span>
                                <span>White</span>
                            </div>
                        </div>
                        <div className="size">
                            <small>Size</small>
                            <div>
                                <span>L</span>
                                <span>M</span>
                                <span>S</span>
                                <span>XL</span>
                                <span>XXL</span>
                                <span>XXXL</span>
                            </div>
                        </div>
                        <div className="Quantity">
                            <small>Quantity</small>
                            <div>
                                <input type="number" name="quantity"/>
                            </div>
                        </div>
                        <div className="buy">
                            <button>BUY NOW</button>
                            <button>ADD TO CART</button>
                        </div>
                        <div className="payment">
                            <button>Paypal</button>
                            <button>Master</button>
                            <button>Visa</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

}

export default IndividualProductPage;
