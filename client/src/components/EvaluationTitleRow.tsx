import { TableCell, TableRow } from "@mui/material";

export default function EvaluationTitleRow({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <>
      <TableRow>
        <TableCell align="left" colSpan={4} sx={{ backgroundColor: "#bbdff9" }}>
          <strong>{title}</strong> - {subtitle}
        </TableCell>
      </TableRow>
    </>
  );
}
