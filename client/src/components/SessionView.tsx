import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

type Session = {
  // id: number;
  startTime: string;
  endTime: string;
  teamName: string;
  // competition: { id: number; name: string };
  // team: { id: number; name: string };
};

// type SessionViewProps = {
//   session: Session;
// };

export default function SessionView({ startTime, endTime, teamName }: Session) {
  //{ session }: SessionViewProps
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardContent>
        <Typography gutterBottom sx={{ fontSize: 14, fontWeight: "bold" }}>
          Equipe : {teamName}
        </Typography>
        <Typography variant="body2"> Commence à : {startTime}</Typography>
        <Typography variant="body2"> Termine à : {endTime}</Typography>
      </CardContent>
    </Card>
  );
}
