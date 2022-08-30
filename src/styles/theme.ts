export interface ThemeTypes {
    theme: {
        colors: {
            navColor: string,
            backgroundColor: string,
            primaryColor: string,
            secondaryColor: string,
            tertiaryColor: string,
            hoverColor: string,
            textColor: string,
            reverseTextColor: string
            accentColor: string,
            chartColor: string,
            loadingColor: string
        },
        font: {
            thinnest: number,
            thin: number,
            regular: number,
            bold: number,
        },
    };
}

const themeLight = {
    colors: {
        navColor: "#FAFAFA",
        backgroundColor: "rgb(255, 255, 255)",
        primaryColor: "rgb(255, 222, 0)",
        secondaryColor: "rgb(255, 255, 255)",
        tertiaryColor: "rgb(227, 227, 227)",
        hoverColor: "rgb(255, 234, 88)",
        textColor: "rgb(0, 0, 0)",
        reverseTextColor: "rgb(255, 255, 255)",
        accentColor: "rgb(0, 66, 100)",
        chartColor: "rgb(102, 102, 102)",
        loadingColor: "rgb(244,244,244)",
    },
    font: {
        thinnest: 300,
        thin: 400,
        regular: 500,
        bold: 600,
    },
};

const themeDark = {
    colors: {
        navColor: "#363636",
        backgroundColor: "rgb(37, 37, 37)",
        primaryColor: "rgb(255, 222, 0)",
        secondaryColor: "rgb(255, 255, 255)",
        tertiaryColor: "rgb(227, 227, 227)",
        hoverColor: "rgb(255, 234, 88)",
        textColor: "rgb(218, 218, 218)",
        reverseTextColor: "rgb(0,0,0)",
        accentColor: "rgb(0, 66, 100)",
        chartColor: "rgb(255, 255, 255)",
        loadingColor: "rgb(43,43,43)",
    },
    font: {
        thin: 400,
        regular: 500,
        bold: 600,
    },
};


export const theme = (isDark: boolean) => isDark ? themeDark : themeLight;