import styled from "@emotion/styled";

export const HeaderComponent = styled.div`
    display: flex;
    width: 100%;
`;
// @ts-ignore
export const HeaderFirstChild = styled.div`
    position: relative;
    width: ${props => props.department ? '20%' : '100%'};
    color: white;
`;
export const DepartmentTitle = styled.div`
    font-weight: bold;
    text-align: center;
    padding: 12px;
    background: #ff6801;
    cursor: pointer;
`;
export const UList = styled.ul`
    position: absolute;
    top: 12px;
    left: 12px;
    list-style-type: none;
    margin: 0;
    padding: 0;
    color: black;
    overflow: hidden;
`;

export const List = styled.li`
    font-family: 'Inter', sans-serif;
    float: left;
    cursor: pointer;
    background: #e0e0e0a3;
    padding: 8px 32px;
    border: none;
    border-radius: 4px;
    font-size: 12px;
    font-weight: bold;
    margin-right: 18px;
    &:hover {
        background-color: #111111;
        color: white;
    }
`;
