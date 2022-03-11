import React from "react";

import Hero from "../components/particles/HeroSection/Hero";
import Feature from "../components/particles/FeatureComponentsWrapper/Feature";
import Brand from "../components/particles/BrandComponentWrapper/Brand";
import Category from "../components/particles/Header/Category";

import categories from "../providers/CategoryProvider";

export const HomePage: React.FC = () => {
    return(
        <div>
            <Category categories={categories} />
            <Hero />
            <Feature />
            <Brand />
        </div>
    );
}
