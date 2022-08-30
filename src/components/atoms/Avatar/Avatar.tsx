import ImageComponent from "../ImageComponent/ImageComponent";
import { useGetUserDataQuery } from "../../../services/api/userDataApi";

const Avatar = () => {
    const { data } = useGetUserDataQuery();
    if (!data) return null;
    const props = {
        src: data.avatar,
        size: "60px",
        alt: "avatar",
    };
    return (
        <ImageComponent props={ props }/>
    );
};
export default Avatar;