import React from "react";
import { jsx } from "@emotion/react";
import categories from "../providers/CategoryProvider";
import Hero from "../components/particles/HeroSection/Hero";
import Department from "../components/particles/departments";
import Category from "../components/particles/Header/Category";

export const HomePage: React.FC = () => {
    return(
        <>
            <Category categories={categories} />
            <div css={{ display: "flex", width: "100%" }}>
                <div css={{ width: "25%" }}>
                    <Department />
                </div>
                <div css={{ width: "75%" }}>
                    <Hero />
                </div>

            </div>
        </>
    );
}
