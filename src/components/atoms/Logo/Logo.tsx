import ImageComponent from "../ImageComponent/ImageComponent";
import logoLightTheme from "../../../assets/LogoTrail.svg";
import logoDarkTheme from "../../../assets/LogoTrailReversedColors.svg";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { selectTheme } from "../../../store/ThemeSlice/themeSlice";

interface Props {
    size: string;
}

const Logo = ({ size }: Props) => {
    const isDark = useAppSelector(selectTheme);
    const logoProps = {
        src: isDark ? logoDarkTheme : logoLightTheme,
        alt: "logo",
        size: size,
    };
    return (
        <ImageComponent props={ logoProps }/>
    );
};


export default Logo;