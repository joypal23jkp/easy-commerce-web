import { css } from "@emotion/react";
import { themeColor } from "./_common";

export const main_content = css`
      background-color: white;
      border-radius: 4px;
      display: flex;
      justify-content: space-around;
    `;

export const search = css`
    border-right: none;
    background: lightgray;
    font-weight: 500;
`;

export const input_search = css`
    width: 304px;
    border-left: none;
`;

export const search_icon_color = css`
    background-color: ${themeColor}
    border-left: none;
`;

export const navItem = css`
    margin: 0 12px;
`;

export const searchBar = css`
    background: #e0e0e0;
    border-radius: 99px;
    height: 36px;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 2px;
    color: white;
    margin-top: 18px;
`;
export const icon_container = css`
    width:100%;
    height:80px;

`
export const image = css`
    background: linear-gradient(90deg, #2979FF 0%, #4C589E 100%);
    border-radius: 6px;background-color:

`
export const brandName = css`
    position: absolute;
    left: 130%;
    right: -340%;
    top: 5%;
    bottom: 5%;
    font-family: Red Hat Display;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 36px;
    color: #0C2146;

`