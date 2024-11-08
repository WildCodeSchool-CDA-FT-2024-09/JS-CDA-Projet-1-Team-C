import { useParams } from "react-router-dom";
import { useGetTeamsOfCompetitionByIdQuery } from "../types/graphql-types";
import TeamRow from "../components/TeamRow";
import MiniNavbar from "../components/MiniNavbar";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
  Box,
} from "@mui/material";

export default function TeamsManagement() {
  const competitionId = parseInt(useParams().competitionId as string);

  const { loading, error, data, refetch } = useGetTeamsOfCompetitionByIdQuery({
    variables: { competitionId: competitionId },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  if (data)
    return (
      <>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="25vh"
        >
          <Typography variant="h2" component="h1">
            Gestion des équipes {competitionId}
          </Typography>
        </Box>

        <MiniNavbar />

        <TableContainer component={Paper} sx={{ maxHeight: "60vh" }}>
          <Table
            stickyHeader
            sx={{ minWidth: 650 }}
            aria-label="liste des équipes"
          >
            <TableHead>
              <TableRow>
                <TableCell>Nom</TableCell>
                <TableCell>Contact</TableCell>
                <TableCell>Provenance</TableCell>
                <TableCell align="right" style={{ minWidth: 250 }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TeamRow
                mode={"create"}
                refetch={refetch}
                competitionId={competitionId}
              />
              {data &&
                data.getCompetitionById.teams.reduce(
                  (aggregat: JSX.Element[], team) => {
                    aggregat.unshift(
                      <TeamRow
                        key={team.id}
                        mode={"consult"}
                        team={team}
                        refetch={refetch}
                      />,
                    );
                    return aggregat;
                  },
                  [],
                )}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
}
