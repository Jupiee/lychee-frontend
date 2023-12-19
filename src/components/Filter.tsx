import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import { useState } from 'react';

interface FilterSearchProps {

  onFilter: (options: string[]) => void
  
}

const Filter = ({onFilter}: FilterSearchProps) => {

    const [placeholder, setPlaceholder]= useState<string[]>(["All"]);

    const handleChange = (event: SelectChangeEvent<typeof placeholder>) => {

      let {target: { value },} = event;

      const newValue = typeof value === "string" ? value.split(",") : value;
      setPlaceholder(newValue);
      onFilter(newValue as string[]);

    }

    const names = [
        'All',
        'PS1',
        'PS2',
        'PS3',
        'PSP',
        'PSV',
        'Xbox',
        'Xbox360',
        'Nintendo DS',
        'Nintendo 3DS',
        'Nintendo GameCube',
        'Nintendo Wii',
        'Nintendo Wii U',
        'Nintendo 64',
        'NES',
        'SNES',
        'Gameboy',
        'Gameboy Color',
        'Gameboy Advance'
      ];

  return (

    // select multiple platforms or just one, default is all, returns a string or an array of strings
          <Select
            sx={{
              width:'25%',
              mr: 2,
              '@media (max-width: 768px)': {
                width:130
              },
              '@media (max-width: 1440px)': {
                width:160
              },
              '@media (max-width: 2560px)': {
                width:190
              }
              }}
            labelId="select-label"
            id="filter-select"
            multiple
            displayEmpty
            value={placeholder}
            onChange={handleChange}
            renderValue={(selected) => {

                if (selected.length === 0) {

                  return 'Platform: ';

                }
      
                return 'Platform: ' + selected.join(', ');

            }}
          >

            {names.map((name) => (

              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>

            ))}

          </Select>

  )

}

export default Filter