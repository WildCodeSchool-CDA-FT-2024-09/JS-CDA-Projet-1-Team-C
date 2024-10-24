import { Link as RouterLink } from "react-router-dom";
import { Link as MUILink, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import imgFirst from "../../assets/images/pexels-vanessa-loring-7868838.jpg";
import imgSnd from "../../assets/images/pexels-vanessa-loring-7868890.jpg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const buttonStyle = {
  padding: "8px 16px",
  margin: "10px",
  color: "black",
  backgroundColor: "primary.main",
  borderRadius: "4px",
  textDecoration: "none",
  width: "20%",
  textAlign: "center",
};

export default function HomePage() {
  return (
    <>
      <Grid container spacing={5} justifyContent="center" sx={{ marginTop: 9 }}>
        <Grid size={5}>
          <img
            src={imgSnd}
            style={{ width: "100%", height: "auto" }}
            alt="Un enfant qui construit un robot"
          />
        </Grid>
        <Grid size={5}>
          <Item>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
            debitis cum accusamus amet illo at, consequatur in neque repellendus
            modi odio ab sunt quo commodi dignissimos culpa expedita est facere?
            Commodi necessitatibus excepturi ducimus dolorem accusamus animi
            magni earum nihil quaerat. Labore optio possimus earum asperiores
            error placeat itaque perferendis pariatur accusamus. Voluptas
            numquam laborum pariatur ab obcaecati! Nam, animi? Labore optio
            possimus earum asperiores error placeat itaque perferendis pariatur
            accusamus. Voluptas numquam laborum pariatur ab obcaecati! Nam,
            animi?
          </Item>
        </Grid>
        <Grid size={5}>
          <Item>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
            debitis cum accusamus amet illo at, consequatur in neque repellendus
            modi odio ab sunt quo commodi dignissimos culpa expedita est facere?
            Commodi necessitatibus excepturi ducimus dolorem accusamus animi
            magni earum nihil quaerat. Labore optio possimus earum asperiores
            error placeat itaque perferendis pariatur accusamus. Voluptas
            numquam laborum pariatur ab obcaecati! Nam, animi? Labore optio
            possimus earum asperiores error placeat itaque perferendis pariatur
            accusamus. Voluptas numquam laborum pariatur ab obcaecati! Nam,
            animi?
          </Item>
        </Grid>
        <Grid size={5}>
          <img
            src={imgFirst}
            style={{ width: "100%", height: "auto" }}
            alt="Trois enfants qui jouent avec un robot"
          />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" marginTop="5vh">
        <MUILink component={RouterLink} to="/raking" sx={buttonStyle}>
          <Typography variant="h6">Voir les classements</Typography>
        </MUILink>
      </Grid>
      <Grid container justifyContent="center">
        <MUILink component={RouterLink} to="/raking" sx={buttonStyle}>
          <Typography variant="h6">Voir les classements</Typography>
        </MUILink>
      </Grid>
      <Grid container justifyContent="center">
        <MUILink component={RouterLink} to="/raking" sx={buttonStyle}>
          <Typography variant="h6">Voir les classements</Typography>
        </MUILink>
      </Grid>
    </>
  );
}
