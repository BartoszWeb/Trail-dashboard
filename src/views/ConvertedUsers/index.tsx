import styled from "styled-components";
import ConvertedUsersTable from "../../components/organisms/ConvertedUsersTable/ConvertedUsersTable";

const ConvertedUsersTableWrapper = styled.div`
  display: grid;
  margin-top: 2em;
  padding: 0 3em;
  grid-auto-rows: max-content;
  @media (max-width: 56em) {
    padding: 1.3em;
  }
`;

const ConvertedUsers = () => {
    return (
        <ConvertedUsersTableWrapper>
            <ConvertedUsersTable/>
        </ConvertedUsersTableWrapper>
    );
};

export default ConvertedUsers;