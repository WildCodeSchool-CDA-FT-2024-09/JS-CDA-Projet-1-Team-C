import { useState } from "react";
import TeamRowEditOrCreate from "./TeamRowEditOrCreate";
import TeamRowConsult from "./TeamRowConsult";

type Mode = "edit" | "consult" | "create";

export default function TeamRow({ mode, team, setSnackStatus }: { mode: Mode }) {
  const [displayMode, setDisplayMode] = useState(mode);

  if (displayMode === "create" || displayMode === "edit")
    return <TeamRowEditOrCreate team={team} displayMode={displayMode} setDisplayMode={setDisplayMode} setSnackStatus={setSnackStatus} />;

  if (displayMode === "consult")
    return <TeamRowConsult team={team} setDisplayMode={setDisplayMode} />;
}
