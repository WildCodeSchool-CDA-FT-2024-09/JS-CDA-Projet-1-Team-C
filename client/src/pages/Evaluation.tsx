import EvaluationTitleRow from "../components/EvaluationTitleRow";
import EvaluationRow from "../components/EvaluationRow";
import {
  Box,
  Stack,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  TableBody,
  TextField,
  Button,
} from "@mui/material";

export type CriteriaType = {
  id: number;
  label: string;
};

export type EvaluationLineType = {
  id: number;
  lines: CriteriaType[];
};

export type EvaluationCriteriasType = {
  id: number;
  title: string;
  subtitle: string;
  evaluations: EvaluationLineType[];
};

// Big objet pour la démo seulement
const evaluationCriterias: EvaluationCriteriasType[] = [
  {
    id: 1,
    title: "IDENTIFIER",
    subtitle: "L'équipe avait un problème clairement défini et bien documenté.",
    evaluations: [
      {
        id: 1,
        lines: [
          { id: 1, label: "Définition floue du problème" },
          { id: 2, label: "Définition partiellement claire du problème" },
          { id: 3, label: "Définition claire du problème" },
          { id: 4, label: "" },
        ],
      },
      {
        id: 2,
        lines: [
          { id: 5, label: "Preuve minimale de recherche" },
          {
            id: 6,
            label:
              "Preuve partielle de recherche provenant d'une ou plusieurs sources",
          },
          {
            id: 7,
            label:
              "Recherche claire et détaillée provenant de diverses sources",
          },
          { id: 8, label: "" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "CONCEVOIR",
    subtitle:
      "L'équipe a collaboré pour créer un plan de projet et développer ses idées.",
    evaluations: [
      {
        id: 1,
        lines: [
          { id: 9, label: "Preuve minimale d'un plan de projet efficace" },
          { id: 10, label: "Preuve partielle d'un plan de projet efficace" },
          { id: 11, label: "Preuve claire d'un plan de projet efficace" },
          { id: 12, label: "" },
        ],
      },
      {
        id: 2,
        lines: [
          {
            id: 13,
            label:
              "Preuve minimale que le processus de développement impliquait tous les membres de l'équipe",
          },
          {
            id: 14,
            label:
              "Preuve partielle que le processus de développement impliquait tous les membres de l'équipe",
          },
          {
            id: 15,
            label:
              "Preuve claire que le processus de développement impliquait tous les membres de l'équipe",
          },
          { id: 16, label: "" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "CRÉER",
    subtitle:
      "L'équipe a développé une idée originale ou s'est appuyée sur une idée existante avec un prototype ou un schéma pour représenter leur solution.",
    evaluations: [
      {
        id: 1,
        lines: [
          {
            id: 17,
            label: "Explication minimale de l'innovation dans la solution",
          },
          {
            id: 18,
            label: "Explication simple de l'innovation dans la solution",
          },
          {
            id: 19,
            label: "Explication détaillée de l'innovation dans la solution",
          },
          { id: 20, label: "" },
        ],
      },
      {
        id: 2,
        lines: [
          {
            id: 21,
            label: "Modèle ou schéma peu clair représentant la solution",
          },
          {
            id: 22,
            label: "Modèle ou schéma simple représentant la solution",
          },
          {
            id: 23,
            label: "Modèle ou schéma détaillé représentant la solution",
          },
          { id: 24, label: "" },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "ITÉRER",
    subtitle:
      "L'équipe a partagé ses idées avec d'autres, recueilli des retours et inclus des améliorations dans leur solution.",
    evaluations: [
      {
        id: 1,
        lines: [
          { id: 25, label: "Partage minimal de leur solution avec d'autres" },
          {
            id: 26,
            label: "Solution partagée avec au moins une personne ou un groupe",
          },
          {
            id: 27,
            label: "Solution partagée avec plusieurs personnes ou groupes",
          },
          { id: 28, label: "" },
        ],
      },
      {
        id: 2,
        lines: [
          {
            id: 29,
            label: "Preuve minimale d'améliorations basées sur les retours",
          },
          {
            id: 30,
            label: "Preuve partielle d'améliorations basées sur les retours",
          },
          {
            id: 31,
            label: "Preuve claire d'améliorations basées sur les retours",
          },
          { id: 32, label: "" },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "COMMUNIQUER",
    subtitle:
      "L'équipe a partagé une présentation efficace de leur solution, de son impact sur les autres, et a célébré les progrès de leur équipe.",
    evaluations: [
      {
        id: 1,
        lines: [
          {
            id: 33,
            label:
              "Explication floue de la solution et de son impact potentiel sur les autres",
          },
          {
            id: 34,
            label:
              "Explication partiellement claire de la solution et de son impact potentiel sur les autres",
          },
          {
            id: 35,
            label:
              "Explication claire de la solution et de son impact potentiel sur les autres",
          },
          { id: 36, label: "" },
        ],
      },
      {
        id: 2,
        lines: [
          {
            id: 37,
            label:
              "La présentation montre un faible sentiment de fierté ou d'enthousiasme pour leur travail",
          },
          {
            id: 38,
            label:
              "La présentation montre un sentiment partiel de fierté ou d'enthousiasme pour leur travail",
          },
          {
            id: 39,
            label:
              "La présentation montre clairement un sentiment de fierté ou d'enthousiasme pour leur travail",
          },
          { id: 40, label: "" },
        ],
      },
    ],
  },
];

export default function Evaluation() {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="25vh"
      >
        <Stack spacing={1} sx={{ alignItems: "center" }}>
          <Typography variant="h2" component="h1">
            Evaluation
          </Typography>
          <p>EQUIPE : Mulhouse Forever 🤠</p>
        </Stack>
      </Box>

      <Stack>
        <h3>INSTRUCTIONS</h3>
        <p>
          Les équipes doivent communiquer aux juges leur réussite dans chacun
          des critères suivants. Cette rubrique doit être remplie conformément à
          la présentation du projet d'innovation. Les juges doivent cocher une
          case sur chaque ligne distincte pour indiquer le niveau atteint par
          l'équipe. Si l'équipe EXCEDE, un bref commentaire dans la colonne
          dépasse est requis.
        </p>
      </Stack>

      <TableContainer
        sx={{ borderRadius: "10px", border: "1px solid #91cbf6" }}
      >
        <Table aria-label="Tableau d'évaluation">
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                sx={{ backgroundColor: "#e3f2fc", width: "25%" }}
              >
                DEBUTANT 1
              </TableCell>
              <TableCell
                align="center"
                sx={{ backgroundColor: "#bbdff9", width: "25%" }}
              >
                ACCOMPLI 3
              </TableCell>
              <TableCell
                align="center"
                sx={{ backgroundColor: "#91cbf6", width: "25%" }}
              >
                EN DEVELOPEMENT 2
              </TableCell>
              <TableCell
                align="center"
                sx={{ backgroundColor: "#66b7f1", width: "25%" }}
              >
                EXCEDE 4
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {evaluationCriterias &&
              evaluationCriterias.map((eva) => (
                <EvaluationRow key={eva.id} eva={eva} />
              ))}
            <EvaluationTitleRow
              title="APPRÉCIATION GLOBALE"
              subtitle="Ces commentaires seront paratagés aux équipes, soyez bienveillants."
            />
            <TableRow>
              <TableCell align="center" colSpan={2}>
                <Stack spacing={2}>
                  <strong>BON TRAVAIL</strong>
                  <TextField
                    sx={{ width: "100%" }}
                    multiline
                    rows={5}
                    placeholder="Quels sont les points positifs que vous avez remarqué ?"
                  ></TextField>
                </Stack>
              </TableCell>
              <TableCell align="center" colSpan={2}>
                <Stack spacing={2}>
                  <strong>PENSEZ A</strong>
                  <TextField
                    sx={{ width: "100%" }}
                    multiline
                    rows={5}
                    placeholder="Qu'est ce que l'équipe peut améliorer ?"
                  ></TextField>
                </Stack>
              </TableCell>
            </TableRow>
            <EvaluationTitleRow
              title="NOTES JURY"
              subtitle="ces notes ne seront pas partagées aux équipes"
            />
            <TableRow>
              <TableCell align="left" colSpan={4}>
                <TextField
                  sx={{ width: "100%" }}
                  multiline
                  rows={5}
                  placeholder="Notez quelque chose pour vous souvenir de l'équipe, un point d'hésitation sur l'évaluation ?"
                ></TextField>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="10vh"
      >
        <Button variant="contained" size="large">
          VALIDER L'EVALUATION
        </Button>
      </Box>
    </>
  );
}
