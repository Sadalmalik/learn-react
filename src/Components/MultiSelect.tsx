import { useState } from "react";
import { UseGlobalState } from "../GlobalState";
import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface MultiSelectProps {
  id?: string;
  label?: string;
  labelId?: string;
  stateKey?: string;
  values: Array<string>;
  size?: "small" | "medium";
  chip?: boolean;
}

function MultiSelect(props: MultiSelectProps) {
  const [selectedNames, setSelectedNames] = props.stateKey
    ? UseGlobalState<string[]>(props.stateKey, [])
    : useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof selectedNames>) => {
    const {
      target: { value },
    } = event;
    alert(`Content changed: ${value}`);
    setSelectedNames(typeof value === "string" ? value.split(",") : value);
  };

  const chip = props.chip ?? false;
  const renderValue = chip
    ? (selected: string[]) => (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
          {selected.map((value) => (
            <Chip key={value} label={value} />
          ))}
        </Box>
      )
    : undefined;

  return (
    <FormControl sx={{ m: 2, width: 245 }}>
      {props.label ? <InputLabel>{props.label}</InputLabel> : <></>}
      <Select
        multiple
        id={props.id}
        labelId={props.labelId}
        size={props.size ?? "small"}
        value={selectedNames}
        onChange={handleChange}
        input={<OutlinedInput id="select-multiple-chip" label={props.label} />}
        renderValue={renderValue}
      >
        {props.values.map((value) => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default MultiSelect;
