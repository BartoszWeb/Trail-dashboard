import { Header } from "./UsersTableHeader.style";

const UsersTableHeader = () => {
    return (
        <Header>
            <span><strong>#</strong></span>
            <span><strong>User</strong></span>
            <span><strong>First session</strong></span>
            <span><strong>Converted session</strong></span>
            <span><strong>Overall time to convert [min]</strong></span>
            <span><strong>Device during session</strong></span>
            <span><strong>Country</strong></span>
            <span><strong>Traffic source</strong></span>
        </Header>
    );
};

export default UsersTableHeader;