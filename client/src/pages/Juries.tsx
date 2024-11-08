import * as React from "react";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import SessionView from "../components/SessionView";
import { useGetJuriesByUserQuery } from "../types/graphql-types";

export default function Juries() {
  const userId = 2;

  const [juryId, setJuryId] = React.useState<number>(1);

  const {
    loading: loadingJuries,
    error: errorJuries,
    data: juriesData,
  } = useGetJuriesByUserQuery({
    variables: { userId: userId },
  });

  const juries = juriesData?.getJuriesByUser;
  let jury = juries?.find((jury) => jury.id === juryId);

  if (loadingJuries) return <p>Loading...</p>;
  if (errorJuries) return <p>Error :(</p>;

  const handleChange = (event: SelectChangeEvent) => {
    setJuryId(parseInt(event.target.value));
    jury = juries?.find((jury) => jury.id === juryId);
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
      <Typography variant="h4" component="h1" sx={{ marginBottom: 6 }}>
        Pour la compétition {jury?.competition.name} du {jury?.competition.date}
      </Typography>
      <FormControl sx={{ width: 300 }}>
        <InputLabel id="demo-simple-select-label">Jurys</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="jury-select"
          value={jury?.name}
          label="Jury"
          onChange={handleChange}
        >
          {juries &&
            juries.map((jury) => (
              <MenuItem value={jury.id}>{jury.name}</MenuItem>
            ))}
        </Select>
      </FormControl>

      <Grid container spacing={2} sx={{ marginTop: 6 }}>
        {jury?.sessions.map((sess) => (
          <Grid size={3}>
            <SessionView
              startTime={sess.startTime}
              endTime={sess.endTime}
              teamName={sess.team.name}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
