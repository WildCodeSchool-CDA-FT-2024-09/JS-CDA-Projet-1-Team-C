import { useParams } from "react-router";
import {
  useGetJuriesOfCompetitionQuery,
  Jury,
  GetCompetitionByIdQueryVariables,
} from "../types/graphql-types";
import ManageJuryAddRow from "../components/ManageJuryAddRow";
import ManageJuryRow from "../components/ManageJuryRow";
import MiniNavbar from "../components/MiniNavbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography, Box, Stack } from "@mui/material";

export default function JuriesManagement() {
  const { competitionId } = useParams<string>();
  const { loading, error, data, refetch } = useGetJuriesOfCompetitionQuery({
    variables: {
      competitionId: parseInt(competitionId as string),
    } as GetCompetitionByIdQueryVariables,
  });

  if (loading) return <p>🥁 Loading...</p>;
  if (error) return <p>☠️ Error: {error.message}</p>;

  return (
    data && (
      <>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="25vh"
        >
          <Stack spacing={1} sx={{ alignItems: "center" }}>
            <Typography variant="h2" component="h1">
              Jurys {data && data.getCompetitionById.name}
            </Typography>
          </Stack>
        </Box>

        <MiniNavbar />

        <TableContainer component={Paper} sx={{ maxHeight: "60vh" }}>
          <Table
            stickyHeader
            sx={{ minWidth: 650 }}
            aria-label="Liste des jurys"
          >
            <TableHead>
              <TableRow>
                <TableCell align="left">#</TableCell>
                <TableCell>Nom du jury</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <ManageJuryAddRow
                refetch={refetch}
                competitionId={parseInt(competitionId as string)}
              />
              {data &&
                data.getCompetitionById.juries.reduce(
                  (aggregate: JSX.Element[], jury) => {
                    aggregate.unshift(
                      <ManageJuryRow
                        refetch={refetch}
                        key={jury.id}
                        jury={jury as Jury}
                      />,
                    );
                    return aggregate;
                  },
                  [],
                )}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    )
  );
}
