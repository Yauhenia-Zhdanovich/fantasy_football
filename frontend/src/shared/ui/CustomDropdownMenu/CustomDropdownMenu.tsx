import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import { useState, type FC } from "react";

interface Label {
  first: string;
  second: string;
}

const menuProps = {
  PaperProps: {
    style: {
      maxHeight: "360px",
      width: "36px",
    },
  },
};

interface DropdownMenuProps {
  width: string;
  Labels: Label;
  filteringValues: () => number[] | string[];
}

export const CustomDropdownMenu: FC<DropdownMenuProps> = (props) => {
  const { width, Labels, filteringValues } = props;
  const [value, setValue] = useState("");
  const [label, setLabel] = useState(Labels.first);

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
    setLabel(Labels.second);
  };

  const handleOpen = () => {
    setLabel(Labels.second);
  };

  const handleBlure = () => {
    if (value === "") {
      setLabel(Labels.first);
    }
  };

  return (
    <FormControl
      sx={{
        height: "100%",
        width: width,
      }}
    >
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="Year"
        onChange={handleChange}
        onOpen={handleOpen}
        onBlur={handleBlure}
        MenuProps={menuProps}
        sx={{
          "&& .MuiSelect-select": {
            paddingBottom: "10.5px",
          },
        }}
      >
        <MenuItem value="">None</MenuItem>
        {filteringValues().map((value, i) => (
          <MenuItem key={i} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
