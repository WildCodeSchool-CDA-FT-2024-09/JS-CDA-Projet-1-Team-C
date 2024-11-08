import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Stack
      width="100%"
      minHeight={75}
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: "#f5f5f5",
        position:"relative",
        bottom:0,
        marginTop:5
      }}
    >
      <Stack direction="row" spacing={4} alignItems="center">
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} FLL Ranker. Tous droits réservés.
        </Typography>

        <Link to="/privacy-policy">
          <Typography variant="body2" color="textSecondary">
            Politique de confidentialité
          </Typography>
        </Link>
        <Link to="/terms">
          <Typography variant="body2" color="textSecondary">
            Conditions d'utilisation
          </Typography>
        </Link>
      </Stack>
    </Stack>
  );
}
