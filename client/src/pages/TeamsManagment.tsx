import { useGetAllTeamsQuery } from "../types/graphql-types";
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
import CreateNewTeam from "./CreateNewTeam";

export default function TeamsManagement() {
  const { loading, error, data } = useGetAllTeamsQuery();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="25vh"
      >
        <Typography variant="h2" component="h1">
          Gestion des équipes
        </Typography>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nom</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Provenance</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.allTeams.map((team) => (
                <TableRow
                  key={team.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {team.name}
                  </TableCell>
                  <TableCell>{team.contact}</TableCell>
                  <TableCell>{team.location}</TableCell>
                </TableRow>
              ))}
            <CreateNewTeam />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
