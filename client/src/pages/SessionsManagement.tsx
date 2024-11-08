import { useParams } from "react-router";
import {
  Typography,
  Box,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import { useGetCompetitionByIdQuery } from "../types/graphql-types";
import SessionCell from "../components/SessionCell";
import MiniNavbar from "../components/MiniNavbar";

export default function CompetitionsManagement() {
  const { competitionId } = useParams();

  const { loading, error, data } = useGetCompetitionByIdQuery({
    variables: { competitionId: parseInt(competitionId as string) },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  // aliasing the data for legibility
  const competition = data?.getCompetitionById;
  const teams = data?.getCompetitionById.teams;
  const sessions = data?.getCompetitionById.sessions;

  const filterSessionByStartTimeAndJuryId = (
    startTime: string,
    juryId: number,
  ) => {
    return sessions?.find(
      (session) => session.jury.id === juryId && session.startTime === startTime 
    );
  };

  const stickyColumnStyle = {
    position: "sticky",
    left: 0,
    background: "white",
    borderRight: "1px solid lightgrey",
    zIndex: "1 !important",
  };

  const timeSlots = [
    { startTime: "09:00", endTime: "09:45" },
    { startTime: "09:45", endTime: "10:30" },
    { startTime: "10:30", endTime: "11:15" },
    { startTime: "11:15", endTime: "12:00" },
    { startTime: "12:00", endTime: "12:45" },
    { startTime: "12:45", endTime: "13:30" },
    { startTime: "13:30", endTime: "14:15" },
    { startTime: "14:15", endTime: "15:00" },
    { startTime: "15:00", endTime: "15:45" },
    { startTime: "15:45", endTime: "16:30" },
    { startTime: "16:30", endTime: "17:00" },
  ];

  if (data)
    return (
      <>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="25vh"
        >
          <Typography variant="h2" component="h1">
            {`Gestion planning ${competition && competition.name}`}
          </Typography>
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
                <TableCell align="left">Créneau</TableCell>
                {competition &&
                  competition.juries.map((jury) => (
                    <TableCell key={`jury-${jury.id}`} align="center">
                      {jury.name}
                    </TableCell>
                  ))}
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            {timeSlots.map((timeSlot) => (
              <TableRow>
                <TableCell align="center" sx={stickyColumnStyle}>
                  {`${timeSlot.startTime}\n${timeSlot.endTime}`}
                </TableCell>
                {competition &&
                  competition.juries.map((jury) => (
                    <SessionCell
                    session={filterSessionByStartTimeAndJuryId(timeSlot.startTime,jury.id)}
                      juryId={jury.id}
                      competitionId={parseInt(competitionId as string)}
                      startTime={timeSlot.startTime}
                      endTime={timeSlot.endTime}
                      teams={teams}
                    />
                  ))}
              </TableRow>
            ))}
          </Table>
        </TableContainer>
      </>
    );
}
