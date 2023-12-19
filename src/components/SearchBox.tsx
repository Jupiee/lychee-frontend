import Filter from './Filter';

import {Box, TextField, InputAdornment, IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

interface SearchBoxProps {

  onSearch: (value: string, options: string[]) => void

}

const SearchBox = ({ onSearch }: SearchBoxProps) => {

  const [value, setValue] = useState('');
  const [platform_options, Setplatform_options]= useState(["All"]);

  const handleFilter= (options: string[]) => {

    Setplatform_options(options);

  }

  return (
    
    <Box sx={{
      display:'flex',
      justifyContent:'center',
      paddingY: 2
      }}>
      
      <Filter onFilter={handleFilter} />

      <TextField placeholder='Search' sx={{
        width:'25%',
        '@media (max-width: 576px)': {
          width:300
        },
        '@media (max-width: 1024px)': {
          width:400
        },
        '@media (max-width: 2560px)': {
          width:550
        },
        }}
        spellCheck={false}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onSearch(value, platform_options)}
        InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <IconButton onClick={() => onSearch(value, platform_options)}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        )
      }}/>
        
    </Box>

  )

}

export default SearchBox