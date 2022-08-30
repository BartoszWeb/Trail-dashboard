import styled from "styled-components";
import DashBoardCharts from "../../components/organisms/DashboardCharts/DashboardCharts";

const DashboardWrapper = styled.div`
  display: grid;
  padding: 3em 3em 0 3em;
  align-items: start;
  @media (max-width: 37em) {
    padding: 1.2em 0.7em 0 0.7em;
  }
  @media (max-width: 14em) {
    padding: 1.2em 0.2em 0 0.2em;
  }
`;


const Dashboard = () => {
    return (
        <DashboardWrapper>
            <DashBoardCharts/>
        </DashboardWrapper>
    );
};

export default Dashboard;