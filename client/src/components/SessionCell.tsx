import {
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TableCell,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useSessionsOperations } from "../services/sessions";
import { useNotification } from "../hooks/useNotification";
import { MinimalTeam, MinimalSession, SessionCellProps } from "../types/types";
import BtnLink from "./BtnLink";

export default function SessionCell({
  initialSession,
  teams,
  juryId,
  competitionId,
  startTime,
  endTime,
}: SessionCellProps) {
  const { handleAddSession, handleEditSession, handleDeleteSession } =
    useSessionsOperations();

  // used to give feedback to the user
  const { notifySuccess, notifyError } = useNotification();

  const noTeam = {
    id: 0,
    name: "disponible",
  };
  const defaultTeam = initialSession ? initialSession.team : noTeam;
  const [selectedTeam, setSelectedTeam] = useState<MinimalTeam>(defaultTeam);
  const [session, setSession] = useState<MinimalSession | undefined>(
    initialSession
  );

  const submitCreation = async (targetTeam: MinimalTeam) => {
    const { success, message, createdSession } = await handleAddSession(
      startTime,
      endTime,
      competitionId,
      juryId,
      targetTeam.id
    );
    if (success) {
      notifySuccess("Créneau enregistré");
      setSelectedTeam(targetTeam);
      setSession(createdSession);
    } else {
      notifyError(message as string);
    }
  };

  const submitEdition = async (targetTeam: MinimalTeam) => {
    if (session) {
      const { success, message } = await handleEditSession(
        session.id,
        targetTeam.id
      );
      if (success) {
        notifySuccess("Modification enregistrée");
        setSelectedTeam(targetTeam);
      } else {
        notifyError(message as string);
      }
    }
  };

  const submitDeletion = async () => {
    if (session) {
      const { success, message } = await handleDeleteSession(session.id);
      if (success) {
        notifySuccess("Créneau supprimé");
        setSelectedTeam(noTeam);
        setSession(undefined);
      } else {
        notifyError(message as string);
      }
    }
  };

  const handleSelect = async (event: SelectChangeEvent) => {
    const targetTeam = teams?.find((team) => team.name === event.target.value);
    if (targetTeam) {
      if (session) {
        await submitEdition(targetTeam);
      } else {
        await submitCreation(targetTeam);
      }
    } else {
      await submitDeletion();
    }
  };

  const fixedSizeCell = {
    minWidth: 200,
    maxWidth: 200,
  };

  return (
    <TableCell sx={fixedSizeCell}>
      <Select
        fullWidth
        id="add-team-select"
        value={selectedTeam.name}
        onChange={handleSelect}
      >
        <MenuItem value="disponible">-</MenuItem>
        {teams?.length ? (
          teams.map((team) => (
            <MenuItem key={team.id} value={team.name}>
              {team.name}
            </MenuItem>
          ))
        ) : (
          <Stack flexDirection="column" gap={1} alignItems="center" justifyContent="center" marginTop={2}>
            <Typography variant="body2" color="textSecondary">
              Aucune équipe pour cette compétition
            </Typography>
            <BtnLink
              to={`/manage/competitions/${competitionId}/teams`}
              content="ajouter des équipes"
            />
          </Stack>
        )}
      </Select>
    </TableCell>
  );
}
