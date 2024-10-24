import { useState, useRef } from "react";
import { GET_ALL_TEAMS } from "../schemas/queries";
import {
  useGetAllTeamsQuery,
  useCreateTeamMutation,
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
  const [inputError, setInputError] = useState({
    name: false,
    contact: false,
    location: false,
  });
  const newTeamNameRef = useRef();
  const newTeamContactRef = useRef();
  const newTeamLocationRef = useRef();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  // these three functions are used to validate the inputs of the new team
  // they impact the clickability of the button.
  const handleNameChange = () => {
    const name = newTeamNameRef.current.value;
    const isValidName = /.{5,100}/.test(name);
    if (isValidName) {
      setInputError({ ...inputError, name: false });
    } else {
      setInputError({ ...inputError, name: true });
    }

    // this is here to prevent linter error.
    console.info(addTeamData, addTeamLoading, addTeamError);
  };

  const handleContactChange = () => {
    const contact = newTeamContactRef.current.value;
    const isValidContact = /.{5,100}/.test(contact);
    if (isValidContact) {
      setInputError({ ...inputError, contact: false });
    } else {
      setInputError({ ...inputError, contact: true });
    }
  };

  const handleLocationChange = () => {
    const location = newTeamLocationRef.current.value;
    const isValidLocation = /.{5,100}/.test(location);
    if (isValidLocation) {
      setInputError({ ...inputError, location: false });
    } else {
      setInputError({ ...inputError, location: true });
    }
  };

  // the three first calls are needed to prevent the request from being made if any of the fields isn't valid.
  const handleAddTeam = async () => {
    handleNameChange();
    handleContactChange();
    handleLocationChange();

    if (!inputError.name && !inputError.contact && !inputError.location) {
      const newTeam = {
        name: newTeamNameRef.current.value,
        contact: newTeamContactRef.current.value,
        location: newTeamLocationRef.current.value,
      };
      await addTeam({
        refetchQueries: [{ query: GET_ALL_TEAMS }],
        variables: { team: newTeam },
      });
    }
  };

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
                  required
                  onChange={handleNameChange}
                  error={inputError.name}
                  helperText={
                    inputError.name
                      ? "Entrez un nom unique de plus de 5 caractères"
                      : ""
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  inputRef={newTeamContactRef}
                  label="contact"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={handleContactChange}
                  error={inputError.contact}
                  helperText={
                    inputError.contact
                      ? "Entrez un contact de plus de 5 caractères"
                      : ""
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  inputRef={newTeamLocationRef}
                  label="provenance"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={handleLocationChange}
                  error={inputError.location}
                  helperText={
                    inputError.location
                      ? "Entrez une provenance de plus de 5 caractères"
                      : ""
                  }
                />
              </TableCell>
              <TableCell align="right">
                <Button
                  disabled={
                    inputError.name ||
                    inputError.contact ||
                    inputError.location ||
                    addTeamLoading
                  }
                  onClick={handleAddTeam}
                >
                  AJOUTER
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
