import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
            <Link href="/manage/competitions">
              <Button sx={{ width: "100%" }} variant="contained">
                Gérer compétitions
              </Button>
            </Link>
          </Grid>
          <Grid size={12}>
            <Link href="/manage/teams">
              <Button sx={{ width: "100%" }} variant="contained">
                Gérer équipes
              </Button>
            </Link>
          </Grid>
          <Grid size={12}>
            <Link href="/manage/juries">
              <Button sx={{ width: "100%" }} variant="contained">
                Gérer jurys
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid size={3}></Grid>
      </Grid>
    </>
  );
}
