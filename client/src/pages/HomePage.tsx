import Grid from "@mui/material/Grid2";
import BtnLink from "../components/BtnLink";
import { Stack, Typography } from "@mui/material";

const imgStyle = { width: "100%", height: "auto", borderRadius: 8 };

export default function HomePage() {
  return (
    <>
      <Grid container spacing={5} justifyContent="center" sx={{ marginTop: 9 }}>
        <Grid size={12}>
          <Stack
            direction="column"
            spacing={2}
            justifyContent="center"
            alignItems="center"
            minHeight={300}
          >
            <Typography variant="h1" gutterBottom>
              Découvrez le classement !
            </Typography>
            <Typography variant="h2" gutterBottom>
              Résultats des compétitions FLL
            </Typography>
          </Stack>
        </Grid>
        <Grid size={5}>
          <img
            src={
              "https://firstlegoleaguefrance.fr/wp-content/uploads/2024/05/FLLWF2023_015-2048x1365.jpeg"
            }
            style={imgStyle}
            alt="Un enfant qui construit un robot"
          />
        </Grid>
        <Grid size={5}>
          <Typography variant="h4" gutterBottom>
            Un challenge ouvert à tous
          </Typography>
          <Typography variant="body1">
            La FLL Challenge permet aux enfants de révéler leurs talents, qu’ils
            soit doué en mécanique, en design, en programmation ou simplement en
            sciences ! Les équipes s'affrontent sur des épreuves de robotique et
            passent un oral devant le jury.
          </Typography>
        </Grid>
        <Grid size={5}>
          <Typography variant="h4" gutterBottom>
            Découvrez les résultats
          </Typography>
          <Typography variant="body1">
            A la fin de la journée, vous aurez accès au classement général des
            équipes, et aux prix décernés en détail.
          </Typography>
        </Grid>
        <Grid size={5}>
          <img
            src={
              "https://firstlegoleaguefrance.fr/wp-content/uploads/2024/05/finale-fll-nantes.jpg"
            }
            style={imgStyle}
            alt="beaucoup de gens autour d'une piste de compétition"
          />
        </Grid>
        <Grid size={12}>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
            minHeight={200}
          >
            <BtnLink to="competition/3/ranking" content="Nationale Paris" />
            <BtnLink
              to="competition/3/ranking"
              content="Finale régionale Nantes"
            />
            <BtnLink
              to="competition/3/ranking"
              content="Finale régionale Bordeaux"
            />
            <BtnLink
              to="competition/3/ranking"
              content="Internationale de Mulhouse"
            />
          </Stack>
        </Grid>
        <Grid size={5}>
          <img
            src={
              "https://firstlegoleaguefrance.fr/wp-content/uploads/2024/05/FLL_E_Team_gelb_orginal-e7cb309b.jpg"
            }
            style={imgStyle}
            alt="Un enfant qui construit un robot"
          />
        </Grid>
        <Grid size={5}>
          <Typography variant="h4" gutterBottom>
            Relisez vos feuilles d'évaluation
          </Typography>
          <Typography variant="body1">
            Les coachs des équipes ont accès aux feullles d'évaluation des jurys
            à la fin de l'évènement, analysez vos résultats et faites encore
            mieux l'année prochaine !
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
