import { useRef } from "react";
import { GET_ALL_TEAMS } from "../schemas/queries";
import {
  useGetAllTeamsQuery,
  useCreateTeamMutation
} from "../types/graphql-types";
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
  TextField,
  Button,
} from "@mui/material";

export default function TeamsManagement() {
  const { loading, error, data } = useGetAllTeamsQuery();
  const [addTeam, { addTeamData, addTeamLoading, addTeamError }] =
    useCreateTeamMutation();
  const newTeamNameRef = useRef();
  const newTeamContactRef = useRef();
  const newTeamLocationRef = useRef();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  const handleAddTeam = () => {
    const newTeam = {
      name: newTeamNameRef.current.value,
      contact: newTeamContactRef.current.value,
      location: newTeamLocationRef.current.value,
    };
    addTeam({ refetchQueries: [{ query: GET_ALL_TEAMS }] ,variables: { team: newTeam } });
  };

  console.info(addTeamData, addTeamLoading, addTeamError)

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
            <TableRow
              key={"team to add"}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <TextField
                  inputRef={newTeamNameRef}
                  label="name"
                  variant="outlined"
                  fullWidth
                />
              </TableCell>
              <TableCell>
                <TextField
                  inputRef={newTeamContactRef}
                  label="contact"
                  variant="outlined"
                  fullWidth
                />
              </TableCell>
              <TableCell>
                <TextField
                  inputRef={newTeamLocationRef}
                  label="provenance"
                  variant="outlined"
                  fullWidth
                />
              </TableCell>
              <TableCell align="right">
                <Button onClick={handleAddTeam}>AJOUTER</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
