import { Link as RouterLink } from "react-router-dom";
import { Link as MUILink, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

const buttonStyle = {
  display: "inline-block",
  padding: "8px 16px",
  color: "white",
  backgroundColor: "primary.main",
  borderRadius: "4px",
  textDecoration: "none",
  width: "100%",
  textAlign: "center",
  "&:hover": {
    backgroundColor: "primary.dark",
  },
};

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
            <MUILink
              component={RouterLink}
              to="/manage/competitions"
              sx={buttonStyle}
            >
              Gérer compétitions
            </MUILink>
          </Grid>
          <Grid size={12}>
            <MUILink component={RouterLink} to="/manage/teams" sx={buttonStyle}>
              Gérer équipes
            </MUILink>
          </Grid>
          <Grid size={12}>
            <MUILink
              component={RouterLink}
              to="/manage/juries"
              sx={buttonStyle}
            >
              <Typography variant="body1" component="span">
                Gérer jurys
              </Typography>
            </MUILink>
          </Grid>
        </Grid>
        <Grid size={3}></Grid>
      </Grid>
    </>
  );
}
