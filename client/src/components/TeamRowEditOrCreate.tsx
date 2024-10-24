import { useState, useRef, RefObject, Dispatch, SetStateAction } from "react";
import { TableRow, TableCell, TextField, Button, Stack } from "@mui/material";
import { GET_ALL_TEAMS } from "../schemas/queries";
import {
  Team,
  useCreateTeamMutation,
  useEditTeamMutation,
} from "../types/graphql-types";
import { Mode, SnackStatus } from "../types/types";

export default function TeamRowEditOrCreate({
  team,
  displayMode,
  setDisplayMode,
  setSnackStatus,
}: {
  team: Team;
  displayMode: string;
  setDisplayMode: Dispatch<SetStateAction<Mode>>;
  setSnackStatus: Dispatch<SetStateAction<SnackStatus>>;
}) {
  const [addTeam] = useCreateTeamMutation();
  const [editTeam] = useEditTeamMutation();

  // used to keep track of input errors
  const [inputError, setInputError] = useState({
    name: false,
    contact: false,
    location: false,
  });

  // used instead of states to avoid multiple re-renders when typing
  const newTeamNameRef = useRef<HTMLInputElement>(null);
  const newTeamContactRef = useRef<HTMLInputElement>(null);
  const newTeamLocationRef = useRef<HTMLInputElement>(null);

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
        setSnackStatus({
          open: true,
          message: "Erreur dans l'ajout de l'équipe, le nom est-il unique ? ",
        });
        setInputError((prevErrors) => ({ ...prevErrors, name: true }));
      }
    }
  };

  const handleEditTeam = async () => {
    if (handleTeamInputValidation()) {
      try {
        const newTeam = {
          id: team.id,
          name: newTeamNameRef.current ? newTeamNameRef.current.value : "",
          contact: newTeamContactRef.current
            ? newTeamContactRef.current.value
            : "",
          location: newTeamLocationRef.current
            ? newTeamLocationRef.current.value
            : "",
        };
        await editTeam({
          refetchQueries: [{ query: GET_ALL_TEAMS }],
          variables: { team: newTeam },
        });
        setSnackStatus({
          open: true,
          message: "Modification enregistrée",
          severity: "success",
        });
        setDisplayMode("consult");
      } catch {
        setSnackStatus({
          open: true,
          message: "Erreur dans l'édition l'équipe",
          severity: "error",
        });
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
            label="nom"
            variant={displayMode === "edit" ? "standard" : "outlined"}
            defaultValue={displayMode === "edit" ? team.name : ""}
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
            variant={displayMode === "edit" ? "standard" : "outlined"}
            defaultValue={displayMode === "edit" ? team.contact : ""}
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
            variant={displayMode === "edit" ? "standard" : "outlined"}
            defaultValue={displayMode === "edit" ? team.location : ""}
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
          {displayMode === "create" && (
            <Button
              disabled={
                inputError.name || inputError.contact || inputError.location
              }
              variant="contained"
              onClick={handleAddTeam}
            >
              AJOUTER
            </Button>
          )}
          {displayMode === "edit" && (
            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <Button
                disabled={
                  inputError.name || inputError.contact || inputError.location
                }
                color="success"
                variant="contained"
                onClick={handleEditTeam}
              >
                SAUVEGARDER
              </Button>

              <Button
                variant="outlined"
                color="error"
                onClick={() => setDisplayMode("consult")}
              >
                ANNULER
              </Button>
            </Stack>
          )}
        </TableCell>
      </TableRow>
    </>
  );
}
