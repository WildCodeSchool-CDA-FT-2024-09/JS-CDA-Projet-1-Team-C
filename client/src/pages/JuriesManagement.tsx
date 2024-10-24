import { useGetAllJuriesQuery } from "../types/graphql-types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography, Box } from "@mui/material";
import JuryAddRow from "../components/JuryAddRow";

export default function JuriesManagement() {
  const { loading, error, data } = useGetAllJuriesQuery();

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
              <JuryAddRow />
            </TableBody>
          </Table>
        </TableContainer>
      </>
    </>
  );
}
