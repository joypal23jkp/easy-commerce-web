import React, { useState } from "react";

const Category = (props: any) => {
    const [categories, setCategories] = useState([1, 2, 3]);

    return (
        <>
            <ul style={{
                listStyleType: "none",
                margin: 0,
                padding: "16px 0",
                overflow: "hidden",
                display: "flex",
                justifyContent: "space-between",
                minHeight: 64,
            }}>
                {
                    props.categories.map((category: any) => {
                        return (
                            <li key={category.name} style={{
                                display: "inline",
                                textAlign: "center"
                            }}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.36 11.52L1.17 7.34C-0.39 5.77 -0.39 3.24 1.17 1.68L8.19 8.68L5.36 11.52ZM10.67 11.18L17.55 18.06L16.14 19.47L9.26 12.59L2.38 19.47L0.97 18.06L10.62 8.4L10.42 8.18C9.64 7.41 9.64 6.15 10.42 5.37L14.76 1L15.69 1.92L12.45 5.18L13.41 6.12L16.65 2.87L17.57 3.79L14.32 7.03L15.26 7.99L18.52 4.74L19.44 5.68L15.07 10.02C14.29 10.8 13.03 10.8 12.26 10.02L12.04 9.82L10.67 11.18Z" fill="#9696A0" />
                                </svg>
                                <h5 style={{
                                    fontSize: 14,
                                    fontWeight: 500
                                }}>{category.name}</h5>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    );
}

export default Category;
