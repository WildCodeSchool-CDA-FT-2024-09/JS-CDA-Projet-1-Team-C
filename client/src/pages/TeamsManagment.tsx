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
  Box
} from "@mui/material";

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
              <TableCell align="right">Contact</TableCell>
              <TableCell align="right">Provenance</TableCell>
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
                  <TableCell align="right">{team.contact}</TableCell>
                  <TableCell align="right">{team.location}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
