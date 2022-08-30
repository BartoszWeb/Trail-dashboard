import styled from "styled-components";
import { ThemeTypes } from "../../../styles/theme";
import ImageComponent from "../ImageComponent/ImageComponent";
import arrowDown from "../../../assets/ArrowDown.svg";

const ArrowWrapper = styled.div`
  padding: 0.7em 0.6em 0.6em 0.6em;
  background-color: ${ ({ theme }: ThemeTypes) => theme.colors.primaryColor };
`;

const ArrowDown = () => {
    const props = {
        src: arrowDown,
        size: "15px",
        alt: "",
    };
    return (
        <ArrowWrapper>
            <ImageComponent props={ props }/>
        </ArrowWrapper>
    );
};

export default ArrowDown;