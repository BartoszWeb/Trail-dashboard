import UsersTableMenu from "../../molecules/UsersTableMenu/UsersTableMenu";
import UsersListTable from "../UsersListTable/UsersListTable";
import { useGetUsersTableDataQuery } from "../../../services/api/usersTableApi";
import Error from "../../molecules/Error/Error";

const ConvertedUsersTable = () => {
    const { isError, refetch } = useGetUsersTableDataQuery();

    if (isError) {
        return (
            <Error refetch={ refetch }/>
        );
    }

    return (
        <>
            <UsersTableMenu/>
            <UsersListTable/>
        </>
    );
};

export default ConvertedUsersTable;