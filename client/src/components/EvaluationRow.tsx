import { useState } from "react";
import EvaluationTitleRow from "./EvaluationTitleRow";
import { EvaluationCriteriasType } from "../pages/Evaluation";
import {
  FormControlLabel,
  Stack,
  TableCell,
  TableRow,
  TextField,
} from "@mui/material";
import Radio from "@mui/material/Radio";

export default function EvaluationRow({
  eva,
}: {
  eva: EvaluationCriteriasType;
}) {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <EvaluationTitleRow title={eva.title} subtitle={eva.subtitle} />
      {eva.evaluations &&
        eva.evaluations.map((line) => (
          <TableRow key={line.id}>
            {line.lines.map((criteria) =>
              criteria.id % 4 ? (
                <TableCell key={criteria.id}>
                  <FormControlLabel
                    label={criteria.label}
                    control={
                      <Radio
                        checked={selectedValue === criteria.id.toString()}
                        onChange={handleChange}
                        value={criteria.id}
                        name={`criteria-${eva.id}-${line.id}`}
                      />
                    }
                  />
                </TableCell>
              ) : (
                <TableCell key={criteria.id}>
                  <Stack direction="row">
                    <FormControlLabel
                      label={criteria.label}
                      control={
                        <Radio
                          checked={selectedValue === criteria.id.toString()}
                          onChange={handleChange}
                          value={criteria.id}
                          name={`criteria-${eva.id}-${line.id}`}
                        />
                      }
                    />
                    <TextField></TextField>
                  </Stack>
                </TableCell>
              ),
            )}
          </TableRow>
        ))}
    </>
  );
}
