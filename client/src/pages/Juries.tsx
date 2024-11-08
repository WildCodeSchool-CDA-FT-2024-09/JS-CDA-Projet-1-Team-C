import * as React from "react";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";
// import MenuItem from "@mui/material/MenuItem";
import SessionView from "../components/SessionView";
import sessions from "../../assets/sessions.json";
// import { useGetAllCompetitionsQuery } from "../types/graphql-types";
// import { useGetAllJuriesQuery } from "../types/graphql-types";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

export default function Juries() {
  // const jurorId = 1;

  const [competition, setCompetition] = React.useState("");

  // const {
  //   loading: loadingCompetitions,
  //   error: errorCompetitions,
  //   data: competitionsData,
  // } = useGetAllCompetitionsQuery();
  // const {
  //   loading: loadingJuries,
  //   error: errorJuries,
  //   data: juriesData,
  // } = useGetAllJuriesQuery();

  // if (loadingCompetitions) return <p>Loading...</p>;

  // if (errorCompetitions) return <p>Error :(</p>;

  // const jury = juriesData?.getAllJuries.find((jury) =>
  //   jury.users.find((user) => user.id === jurorId)
  // );
  // console.info(jury);

  //competition = competitionsData.getAllCompetitions.filter((competition) => (competition === jury.competition));

  const handleChange = (event: SelectChangeEvent) => {
    setCompetition(event.target.value);
  };

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
      </Box>
      <FormControl sx={{ width: 150 }}>
        <InputLabel id="demo-simple-select-label">Compétition</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={competition}
          label="Competition"
          onChange={handleChange}
        >
          {/*           {data &&
            data.getAllCompetitions.map((competition) => (
              <MenuItem value={competition.name}>{competition.name}</MenuItem>
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
