import { TableRow, TableCell, Button } from "@mui/material";

export default function TeamRowConsult({ team, setDisplayMode }) {
  return (
    <TableRow
      key={team.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {team.name}
      </TableCell>
      <TableCell>{team.contact}</TableCell>
      <TableCell>{team.location}</TableCell>
      <TableCell align="right">
        <Button variant="outlined" onClick={() => setDisplayMode("edit")}>
          EDITER
        </Button>
      </TableCell>
    </TableRow>
  );
}
