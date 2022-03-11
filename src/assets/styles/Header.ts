import { css } from "@emotion/react";
import { themeColor } from "./_common";

export const main_content = css`
      background-color: white;
      display: flex;
      justify-content: space-around;
      min-height: 80px;
      max-width: 1920px;
      margin: auto;
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
    height: 100%;
    display: flex;
    align-items: center;
`;

export const searchBar = css`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
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
    // position: absolute;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 36px;
    color: #0C2146;
    margin-left:15px;
`
