import { MenuItem, Select, SelectChangeEvent, TableCell } from "@mui/material";
import { useState } from "react";
import { useSessionsOperations } from "../services/sessions";
import { useNotification } from "../hooks/useNotification";

type MinimalTeam = {
  id: number;
  name: string;
};

type SessionCellProps = {
  teams: MinimalTeam[];
  startTime: string;
  endTime: string;
  competitionId: number;
  juryId: number;
};

export default function SessionCell({
  teams,
  juryId,
  competitionId,
  startTime,
  endTime,
}: SessionCellProps) {
  const { handleAddSession } = useSessionsOperations();

  // used to give feedback to the user
  const { notifySuccess, notifyError } = useNotification();

  const noTeam = {
    id: 0,
    name: "disponible",
  };

  const [selectedTeam, setSelectedTeam] = useState<MinimalTeam>(noTeam);

  const submitCreation = async (targetTeam: MinimalTeam) => {
    const { success, message } = await handleAddSession(
      startTime,
      endTime,
      competitionId,
      juryId,
      targetTeam.id
    );
    if (success) {
      notifySuccess("Créneau enregistré");
    } else {
      notifyError(message);
    }
  };

  const handleSelect = (event: SelectChangeEvent) => {
    const targetTeam = teams.find((team) => team.name === event.target.value);
    if (targetTeam) {
      // submitEdition goes here in the future, if nothing to edit, create
      submitCreation(targetTeam);
      setSelectedTeam(targetTeam);
    } else {
      // submitDeletion goes here in the future
      setSelectedTeam(noTeam);
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
        {teams.map((team) => (
          <MenuItem key={team.id} value={team.name}>
            {team.name}
          </MenuItem>
        ))}
      </Select>
    </TableCell>
  );
}
