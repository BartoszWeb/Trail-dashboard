import styled from "styled-components";
import { useGetUserDataQuery } from "../../../services/api/userDataApi";

const UserIDWrapper = styled.p`
  margin-right: 0.8em;
`;

const UserID = () => {
    const { data } = useGetUserDataQuery();
    if (!data) return null;

    return (
        <UserIDWrapper>{ data.email }</UserIDWrapper>
    );
};

export default UserID;