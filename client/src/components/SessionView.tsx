import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import BtnLink from "../components/BtnLink";

type Session = {
  startTime: string;
  endTime: string;
  teamName: string;
};

export default function SessionView({ startTime, endTime, teamName }: Session) {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardContent>
        <Typography gutterBottom sx={{ fontSize: 14, fontWeight: "bold" }}>
          Equipe : {teamName}
        </Typography>
        <Typography variant="body2"> Commence à : {startTime}</Typography>
        <Typography variant="body2"> Termine à : {endTime}</Typography>
        <Stack justifyContent="center" marginTop={2}>
          <BtnLink to="/juries/evaluation" content="Evaluer" />
        </Stack>
      </CardContent>
    </Card>
  );
}
