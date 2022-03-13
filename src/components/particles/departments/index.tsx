import React from "react";
import {Tree} from "antd";
import {jsx} from "@emotion/react";
import styled from "@emotion/styled";
import {DownOutlined} from "@ant-design/icons";
import {categoryTree} from "../../../providers/CategoryProvider";


const DepartmentListWrapper = styled.div`
    width: 100%;
    padding: 0 24px;
`;

const DepartmentList = styled.div`
    list-style: none;
    font-size: 16px;
    font-weight: 400;
    line-height: 2.5;
`;

const Department: React.FC = () => {
    return(
        <>
            <DepartmentListWrapper>
                <div
                    css={{
                        fontWeight: 500,
                        fontSize: 18,
                        marginBottom: 24,
                        color: ' rgb(34, 100, 209)',
                        border: '1px solid rgb(67 73 209 / 16%)',
                        borderRadius: 5,
                        padding: '8px 12px',
                        display: "flex"
                    }}
                >
                    <svg
                        css={{ margin: 10 }}
                        width="18"
                        height="12"
                        viewBox="0 0 18 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M3 7H15V5H3V7ZM0 0V2H18V0H0ZM7 12H11V10H7V12Z" fill="#2264D1"/>
                    </svg>

                    <div css={{ width: "100%",  textAlign: "left" }}>
                        Departments
                    </div>
                </div>
                <DepartmentList>
                    <Tree className="category-tree" treeData={categoryTree} showLine={false} switcherIcon={<DownOutlined />} />
                </DepartmentList>
            </DepartmentListWrapper>
        </>
    );
}

export default Department;
