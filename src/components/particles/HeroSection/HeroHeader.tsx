import React from "react";
import data from "../../../helpers/data";
import {HeaderComponent, HeaderFirstChild, UList, List} from "../../../assets/styles/HeroHeaderStyle";

export default function HeroHeader(){
    // @ts-ignore
    return(
        <HeaderComponent>
            <HeaderFirstChild>
                <UList>
                    {
                        data.map((value: string) =>{
                           return(
                               <List key={value}>{value}</List>
                           )
                        })
                    }
                </UList>
            </HeaderFirstChild>
        </HeaderComponent>
    );
}
