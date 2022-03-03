interface ITheme {
    layout: "BOXED" | "TRIANGLE" | string;
    font: string;
    background: {
        primary: string;
        secondary: string;
        tertiary: string;
        gradientStart: string;
        gradientStop: string;
        layout: string;
        };
        foreground: {
        primary: string;
        secondary: string;
        };
        text: {
        primary: string;
        secondary: string;
        tertiaryTextColor: string;
        };
        button: {
        primaryGradientStart: string;
        primaryGradientStop: string;
        primaryShadow: string;
        buttonTextColor: string;
        secondaryButtonBackground: string;
        tertiaryButtonBackground: string;
        };
    }