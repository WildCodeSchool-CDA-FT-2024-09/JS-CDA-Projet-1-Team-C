import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid2";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import BarChartIcon from "@mui/icons-material/BarChart";
import { red } from "@mui/material/colors";
import { green } from "@mui/material/colors";
import Paper from "@mui/material/Paper";

import imgFirst from "../../assets/images/pexels-vanessa-loring-7868838.jpg"
import imgSnd from "../../assets/images/pexels-vanessa-loring-7868890.jpg"

const ColorButtonRed = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  backgroundColor: red[500],
}));

const ColorButtonGreen = styled(Button)<ButtonProps>(() => ({
  backgroundColor: green[500],
}));

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

export default function HomePage() {
  return (
    <>
      <Grid
        container
        spacing={5}
        justifyContent="center"
        sx={{ marginTop: 9 }}
      >
        <Grid size={5}>
          <img src={imgSnd} style={{ width: "100%", height: "auto" }} />
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
          <img src={imgFirst} style={{ width: "100%", height: "auto" }} />
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Link href="/ranking">
          <ColorButtonGreen
            variant="contained"
            endIcon={<BarChartIcon />}
            sx={{ marginTop: 9 }}
          >
            Voir les classements
          </ColorButtonGreen>{" "}
        </Link>
      </Grid>
      <Grid container justifyContent="center">
        <Link href="/ranking">
          <Button
            variant="contained"
            endIcon={<BarChartIcon />}
            sx={{ marginTop: 5 }}
          >
            Voir les classements
          </Button>{" "}
        </Link>
      </Grid>
      <Grid container justifyContent="center">
        <Link href="/ranking">
          <ColorButtonRed
            variant="contained"
            endIcon={<BarChartIcon />}
            sx={{ marginTop: 5 }}
          >
            Voir les classements
          </ColorButtonRed>{" "}
        </Link>
      </Grid>
    </>
  );
}
