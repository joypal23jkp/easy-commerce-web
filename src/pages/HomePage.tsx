import React from "react";
import Hero from "../components/particles/HeroSection/Hero";
import Feature from "../components/particles/FeatureComponentsWrapper/Feature";
import Brand from "../components/particles/BrandComponentWrapper/Brand";
import Category from "../components/particles/Header/Category";

export const HomePage: React.FC = () => {
    return (
        <div>
            <Category />
            <Hero />
            <Feature />
            <Brand />
        </div>
    );
}
