import { useState, Dispatch, SetStateAction } from "react";
import TeamRowEditOrCreate from "./TeamRowEditOrCreate";
import TeamRowConsult from "./TeamRowConsult";
import { Team } from "../types/graphql-types";
import { Mode, SnackStatus } from "../types/types";

export default function TeamRow({
  mode,
  team,
  setSnackStatus,
}: {
  mode: Mode;
  team: Team;
  setSnackStatus: Dispatch<SetStateAction<SnackStatus>>;
}) {
  const [displayMode, setDisplayMode] = useState<Mode>(mode);

  if (displayMode === "create" || displayMode === "edit")
    return (
      <TeamRowEditOrCreate
        team={team}
        displayMode={displayMode}
        setDisplayMode={setDisplayMode}
        setSnackStatus={setSnackStatus}
      />
    );

  if (displayMode === "consult")
    return <TeamRowConsult team={team} setDisplayMode={setDisplayMode} />;
}
