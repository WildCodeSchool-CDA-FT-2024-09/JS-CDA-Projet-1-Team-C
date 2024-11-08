import { Stack, Typography } from "@mui/material";
import BtnLink from "../components/BtnLink";

export default function RankingNotFound() {
  return (
    <Stack
      direction="column"
      spacing={4}
      justifyContent="center"
      alignItems="center"
      minHeight={300}
      paddingTop={6}
    >
      <Typography variant="h1" gutterBottom>
        Classement Indisponible
      </Typography>
      <Typography variant="h3" textAlign="center">
        Les jurys délibèrent 🤔, vous aurez bientôt plus d'informations
      </Typography>
      <BtnLink to="/" content="retour à l'accueil" />
    </Stack>
  );
}
