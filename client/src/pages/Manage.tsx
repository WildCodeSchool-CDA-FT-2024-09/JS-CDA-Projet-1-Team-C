import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import BtnLink from "../components/BtnLink";

export default function Manage() {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="25vh"
      >
        <Typography variant="h2" component="h1">
          Tableau de bord
        </Typography>
      </Box>
      <Grid container spacing={2} size={12}>
        <Grid size={3}></Grid>
        <Grid container spacing={2} size={6}>
          <Grid size={12}>
            <BtnLink to="/manage/competitions" content="Gérer compétitions" />
          </Grid>
          <Grid size={12}>
            <BtnLink to="/manage/teams" content="Gérer équipes" />
          </Grid>
          <Grid size={12}>
            <BtnLink to="/manage/juries" content="Gérer jurys" />
          </Grid>
        </Grid>
        <Grid size={3}></Grid>
      </Grid>
    </>
  );
}
