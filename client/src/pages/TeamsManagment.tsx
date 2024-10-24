import { useState } from "react";
import { useGetAllTeamsQuery } from "../types/graphql-types";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
  Box,
  Alert,
  Snackbar,
} from "@mui/material";
import TeamRow from "../components/TeamRow";
import { SnackStatus } from "../types/types";

export default function TeamsManagement() {
  const { loading, error, data } = useGetAllTeamsQuery();

  // used for UI feedback
  const [snackStatus, setSnackStatus] = useState<SnackStatus>({
    open: false,
    message: "",
    severity: "error",
  });

  const handleClose = () => {
    setSnackStatus({ ...snackStatus, open: false });
  };

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="25vh"
      >
        <Typography variant="h2" component="h1">
          Gestion des équipes
        </Typography>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nom</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Provenance</TableCell>
              <TableCell align="right" style={{ minWidth: 250 }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.allTeams.map((team) => (
                <TeamRow
                  mode={"consult"}
                  team={team}
                  setSnackStatus={setSnackStatus}
                />
              ))}
            <TeamRow mode={"create"} setSnackStatus={setSnackStatus} />
          </TableBody>
        </Table>
      </TableContainer>

      <Snackbar
        open={snackStatus.open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={snackStatus.severity}
          sx={{ width: "100%" }}
        >
          {snackStatus.message}
        </Alert>
      </Snackbar>
    </>
  );
}
