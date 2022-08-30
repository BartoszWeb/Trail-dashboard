import { Wrapper, StyledLink } from "./NavigationSidebar.style";

export const NavigationSidebar = () => {
    return (
        <Wrapper>
           <ul>
                <li><StyledLink to="/">Dashboard</StyledLink></li>
                <li><StyledLink to="/converted-users">Converted users</StyledLink></li>
                <li><StyledLink to="/best-selling-pages">Best selling pages</StyledLink></li>
            </ul>
        </Wrapper>
    );
};