import { InputLabel, Select, MenuItem, SelectChangeEvent, FormControl } from "@mui/material"
import { useState } from "react"
import { Label } from "../model/types/dropdown";

const menuProps = {
    PaperProps: {
      style: {
        maxHeight: '360px',
        width: '36px',
      },
    },
  };

interface DropdownMenuProps {
    width: string,
    Labels: Label,
    filteringValues: () => number[]|string []
}

export const DropdownMenu = (props: DropdownMenuProps) => {

    const {width, Labels, filteringValues} = props;
    const [value, setValue] = useState('');
    const [label, setLabel] = useState(Labels.first);

    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value as string);
        setLabel(Labels.second)
    };

    const handleOpen = () => {
        setLabel(Labels.second)
    }

    const handleBlure = () => {
        if (value === '') {
            setLabel(Labels.first)
        }
    }

    return (
        <FormControl sx={{
            height: '40px',
            width: width,
        }}>
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
                    '&& .MuiSelect-select': {
                      paddingBottom: '10.5px',
                    },
                  }}
            >
                <MenuItem value="">
                    None
                </MenuItem>
                {
                    filteringValues().map((value, i) => (
                        <MenuItem key={i} value={value}>{value}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    )
}