import React from "react";
import {Carousel} from "antd";
import BannerOne from "../../../assets/images/banners/banner1.jpg";

const contentStyle = {
    height: '350px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export default function BannerCarousel(){
    return(
        <Carousel effect="fade">
            <div>
                <img src={BannerOne} alt="B1" style={{
                    width: '100%',
                    borderRadius: '0 15px 15px 0'
                }}/>
            </div>
            <div>
                <img src={BannerOne} alt="B1" style={{
                    width: '100%',
                    borderRadius: '0 15px 15px 0'
                }}/>
            </div>
            <div>
                <img src={BannerOne} alt="B1" style={{
                    width: '100%',
                    borderRadius: '0 15px 15px 0'
                }}/>
            </div>
            <div>
                <img src={BannerOne} alt="B1" style={{
                    width: '100%',
                    borderRadius: '0 15px 15px 0'
                }}/>
            </div>
        </Carousel>
    );
}
