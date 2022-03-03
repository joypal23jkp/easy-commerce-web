import React from "react";
import Hero from "../components/particles/HeroSection/Hero";
import Feature from "../components/particles/FeatureComponentsWrapper/Feature";
import Brand from "../components/particles/BrandComponentWrapper/Brand";

export const HomePage: React.FC = () => {
    return(
        <div>
            <Hero />
            <Feature />
            <Brand />
        </div>
    );
}
