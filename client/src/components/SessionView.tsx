import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

type Session = {
  id: number;
  start: string;
  end: string;
  competition: { id: number; name: string };
  team: { id: number; name: string };
};

type SessionViewProps = {
  session: Session;
};

export default function SessionView({ session }: SessionViewProps) {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardContent>
        <Typography gutterBottom sx={{ fontSize: 14, fontWeight: "bold" }}>
          Equipe : {session.team.name}
        </Typography>
        <Typography variant="body2"> Commence à : {session.start}</Typography>
        <Typography variant="body2"> Termine à : {session.end}</Typography>
      </CardContent>
    </Card>
  );
}
