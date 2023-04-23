import { Container } from "@mui/material";
import GameTable from "../components/table/GameTable";

const Dashboard = ({ games, reviews }) => {
  return (
    <Container>
      <GameTable games={games} />
    </Container>
  );
};

export default Dashboard;
