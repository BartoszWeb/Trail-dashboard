import ImageComponent from "../ImageComponent/ImageComponent";
import React from "react";
import successIcon from "../../../assets/Success.svg"

const propsSuccess = {
    size: "35px",
    src: successIcon,
    alt: ""
};
export const SuccessIcon = () => {
    return(
        <ImageComponent props={ propsSuccess }/>
    )
}