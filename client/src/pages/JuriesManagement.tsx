import { useState } from "react";
import { useGetAllJuriesQuery } from "../types/graphql-types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography, Box, TextField } from "@mui/material";

export default function JuriesManagement() {
  const { loading, error, data } = useGetAllJuriesQuery();

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const handleNameChange = (e) => {
    setName(e.target.value);
    if (e.target.validity.valid) {
      setNameError(false);
    } else {
      setNameError(true);
    }
  };

  if (loading) return <p>🥁 Loading...</p>;
  if (error) return <p>☠️ Error: {error.message}</p>;

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="25vh"
      >
        <Typography variant="h2" component="h1">
          Gestion des jurys
        </Typography>
      </Box>
      {data && data.getAllJuries.length ? (
        <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="Liste des jurys">
              <TableHead>
                <TableRow>
                  <TableCell align="left">#</TableCell>
                  <TableCell>Nom</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.getAllJuries.map((jury) => (
                  <TableRow
                    key={jury.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{jury.id}</TableCell>
                    <TableCell component="th" scope="row">
                      {jury.name}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left"></TableCell>
                  <TableCell align="left">
                    <TextField
                      required
                      label="Required"
                      value={name}
                      onChange={handleNameChange}
                      error={nameError}
                      helperText={
                        nameError ? "Le nom ne peux pas être vide" : ""
                      }
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    Ajouter
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <p>Aucun jury.</p>
      )}
    </>
  );
}
