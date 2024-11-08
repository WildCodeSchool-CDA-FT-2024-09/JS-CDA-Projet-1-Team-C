// import * as React from "react";
// import { useEffect } from "react";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
// import MenuItem from "@mui/material/MenuItem";
import SessionView from "../components/SessionView";
import sessions from "../../assets/sessions.json";
// import { useGetAllCompetitionsQuery } from "../types/graphql-types";
// import { useGetAllJuriesQuery } from "../types/graphql-types";
// import { useGetJuriesByUserQuery } from "../types/graphql-types";
// import { Jury } from "../types/graphql-types";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

// type juryType = {
//   id: number;
//   name: string;
//   users: {
//     id: number;
//   };
//   competitions: {
//     id: number;
//   };
// };

// type competitionType = {
//   id: number;
//   name: string;
//   date: string;
// };

export default function Juries() {
  // const jurorId = 1;

  // const [juryInput, setJuryInput] = React.useState("");
  // const [juryId, setJuryId] = React.useState<number>(0);
  // //const [competition, setCompetition] = React.useState<
  //   competitionType | undefined
  // >();

  // const {
  //   loading: loadingCompetitions,
  //   error: errorCompetitions,
  //   data: competitionsData,
  // } = useGetAllCompetitionsQuery();
  // const {
  //   loading: loadingJuries,
  //   error: errorJuries,
  //   data: juriesData,
  // } = useGetJuriesByUserQuery();

  // if (loadingCompetitions) return <p>Loading...</p>;
  // if (errorCompetitions) return <p>Error :(</p>;

  // const juries = juriesData?.getAllJuries.filter((jury) =>
  //   jury.users.find((user) => user.id === jurorId)
  // );

  // useEffect(() => {
  //   if (!competition) {
  //     const comp = juries?.find((jury) => jury.id === juryId)?.competition;
  //     setCompetition(comp);
  //   }
  // }, [juries, juryId, competition]);

  // console.info("juré 1:", jurorId);
  // console.info("jurys avec le juré 1 :", juries);
  // console.info(
  //   "compétition du jury 1er : ",
  //   juries && juries![0].competition.name
  // );

  //competition = competitionsData.getAllCompetitions.filter((competition) => (competition === jury.competition));
  // const handleChange = (event: SelectChangeEvent) => {
  //   //const test = event.target.value as Number;
  //   // const selected =
  //   //   juries && juries.find((jury) => jury.id === parseInt(event.target.value));
  //   setJuryId(parseInt(event.target.value));
  //   const jury = juries && juries.find((jury) => jury.id === juryId);
  //   setCompetition(jury && jury.competition);
  //   // const competitionName = jury && jury.competition.name;
  //   // const competitionDate = jury && jury.competition.date;
  //   // setCompetition(jury.competition);
  // };

  return (
    <>
      <Box
        sx={{ marginTop: 6 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="25vh"
      >
        <Typography variant="h2" component="h1">
          Mon planning
        </Typography>
        <Typography variant="h3" component="h1">
          Pour la compétition la date
        </Typography>
      </Box>
      <FormControl sx={{ width: 300 }}>
        <InputLabel id="jury-select-label">Jurys</InputLabel>
        <Select
          labelId="jury-select-label"
          id="jury-select"
          value={""}
          label="Jury"
          // onChange={handleChange}
        >
          {/* {juries &&
            juries.map((jury) => (
              <MenuItem value={jury.id}>{jury.name}</MenuItem>
            ))} */}
        </Select>
      </FormControl>

      <Grid container spacing={2} sx={{ marginTop: 6 }}>
        {sessions.map((sess) => (
          <Grid size={3}>
            <SessionView session={sess} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
