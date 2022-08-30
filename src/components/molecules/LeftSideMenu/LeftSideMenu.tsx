import styled from "styled-components";
import { Link } from "react-router-dom";
import { useGetUserDataQuery } from "../../../services/api/userDataApi";
import Logo from "../../atoms/Logo/Logo";
import ListItem from "../../atoms/ListItem/ListItem";
import StyledLink from "../../atoms/StyledLink/StyledLink";

const NavLeftSide = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
`;

const LeftSideMenu = () => {
    const { data } = useGetUserDataQuery();
    if (!data) return null;

    return (
        <NavLeftSide>
            <Link to="./">
                <Logo size={ "150px" }/>
            </Link>
            <ListItem>
                <StyledLink to="./">Tracked page: { data.project }</StyledLink>
            </ListItem>
            <ListItem>
                <StyledLink to="./">Blog</StyledLink>
            </ListItem>
            <ListItem>
                <StyledLink to="./">Help</StyledLink>
            </ListItem>
        </NavLeftSide>
    );
};

export default LeftSideMenu;