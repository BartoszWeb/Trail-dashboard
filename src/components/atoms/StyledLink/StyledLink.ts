import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${ ({ theme }) => theme.colors.textColor };
  display: block;
  width: 100%;
  text-align: center;
  padding: 0.7em;
`;

export default StyledLink;