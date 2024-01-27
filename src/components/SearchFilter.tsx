import {useState} from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Box, Alert } from '@mui/material';

interface SearchFilterProps {

    onFilter: (type: string) => void

}

const SearchFilter = ({onFilter} : SearchFilterProps) => {

    const [placeholder, setPlaceholder]= useState<string>('Indexed Search');

    const handleChange = (event: SelectChangeEvent) => {

        setPlaceholder(event.target.value);
        onFilter(event.target.value);

    }

  return (

    <Box sx={{display: "flex", justifyContent: "center"}}>

        <Select
        sx={{
            '@media (max-width: 425px)': {
              width:135,
              height: 60
            }
            }}
        labelId="search-type-label"
        id="search-type"
        displayEmpty
        value={placeholder}
        onChange={handleChange}
        >
            <MenuItem value={"Indexed Search"}>Indexed Search</MenuItem>
            <MenuItem value={"Linear Search"}>Linear Search</MenuItem>
        </Select>

        <Alert severity="info">Can't find what you're looking for? Try other search type!</Alert>

    </Box>

  )

}

export default SearchFilter