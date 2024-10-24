import { useRef, useState } from "react";
import {
  useGetAllJuriesQuery,
  useCreateNewJuryMutation,
} from "../types/graphql-types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Typography,
  Box,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";

export default function JuriesManagement() {
  const { loading, error, data } = useGetAllJuriesQuery();
  const [createNewJury] = useCreateNewJuryMutation();

  const nameRef = useRef<HTMLInputElement>("");
  const [nameError, setNameError] = useState<boolean>(false);

  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleAlertClose = () => {
    setOpenAlert(false);
  };

  const handleNameValidation = () => {
    const value = nameRef.current && nameRef.current.value;
    return value ? /.{5,100}/.test(value) : false;
  };

  const handleNameChange = async () => {
    if (handleNameValidation()) {
      setNameError(false);

      await createNewJury({
        variables: {
          data: {
            name: nameRef.current.value,
          },
        },
      });
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

      <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="Liste des jurys">
            <TableHead>
              <TableRow>
                <TableCell align="left">#</TableCell>
                <TableCell>Nom</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.getAllJuries.map((jury) => (
                  <TableRow
                    key={jury.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{jury.id}</TableCell>
                    <TableCell component="th" scope="row">
                      {jury.name}
                    </TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                ))}
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left"></TableCell>
                <TableCell align="left">
                  <TextField
                    inputRef={nameRef}
                    required
                    label="name"
                    variant="outlined"
                    fullWidth
                    onChange={handleNameChange}
                    error={nameError}
                    helperText={
                      nameError
                        ? "Le nom doitfaire entre 3 et 100 caractères"
                        : ""
                    }
                  />
                </TableCell>
                <TableCell align="right">
                  <Button onClick={handleNameChange} variant="contained">
                    AJOUTER
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Snackbar
          open={openAlert}
          autoHideDuration={6000}
          onClose={handleAlertClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            onClose={handleAlertClose}
            severity="error"
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        </Snackbar>
      </>
    </>
  );
}
