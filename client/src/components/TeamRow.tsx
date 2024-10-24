import { useState, useRef, RefObject } from "react";
import { GET_ALL_TEAMS } from "../schemas/queries";
import { useCreateTeamMutation } from "../types/graphql-types";
import {
  TableRow,
  TableCell,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";

export default function TeamRow() {
  const [addTeam] = useCreateTeamMutation();

  // used to keep track of input errors
  const [inputError, setInputError] = useState({
    name: false,
    contact: false,
    location: false,
  });

  // used for UI feedback
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  // used instead of states to avoid multiple re-renders when typing
  const newTeamNameRef = useRef<HTMLInputElement>(null);
  const newTeamContactRef = useRef<HTMLInputElement>(null);
  const newTeamLocationRef = useRef<HTMLInputElement>(null);

  const handleClose = () => {
    setOpen(false);
  };

  const validateInput = (inputRef: RefObject<HTMLInputElement>) => {
    const value = inputRef.current && inputRef.current.value;
    return value ? /.{5,100}/.test(value) : false;
  };

  const handleInputChange = (
    field: string,
    inputRef: RefObject<HTMLInputElement>
  ) => {
    const isValid = validateInput(inputRef);
    setInputError((prevErrors) => ({ ...prevErrors, [field]: !isValid }));
  };

  const handleTeamInputValidation = () => {
    const isValidName = validateInput(newTeamNameRef);
    const isValidContact = validateInput(newTeamContactRef);
    const isValidLocation = validateInput(newTeamLocationRef);

    setInputError({
      name: !isValidName,
      contact: !isValidContact,
      location: !isValidLocation,
    });

    return isValidName && isValidContact && isValidLocation;
  };

  const handleAddTeam = async () => {
    if (handleTeamInputValidation()) {
      try {
        const newTeam = {
          name: newTeamNameRef.current ? newTeamNameRef.current.value : "",
          contact: newTeamContactRef.current
            ? newTeamContactRef.current.value
            : "",
          location: newTeamLocationRef.current
            ? newTeamLocationRef.current.value
            : "",
        };
        await addTeam({
          refetchQueries: [{ query: GET_ALL_TEAMS }],
          variables: { team: newTeam },
        });
      } catch {
        setOpen(true);
        setMessage("Erreur dans l'ajout de l'équipe, le nom est-il unique ? ");
        setInputError((prevErrors) => ({ ...prevErrors, name: true }));
      }
    }
  };

  return (
    <>
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
            onChange={() => handleInputChange("name", newTeamNameRef)}
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
            onChange={() => handleInputChange("contact", newTeamContactRef)}
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
            onChange={() => handleInputChange("location", newTeamLocationRef)}
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
              inputError.name || inputError.contact || inputError.location
            }
            variant="contained"
            onClick={handleAddTeam}
          >
            AJOUTER
          </Button>
        </TableCell>
      </TableRow>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}
