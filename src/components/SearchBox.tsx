import {Box, TextField} from '@mui/material';
import { useState } from 'react';

interface SearchBoxProps {

  onSearch: (value: string) => void

}

const SearchBox = ({ onSearch }: SearchBoxProps) => {

  const [value, setValue] = useState('');

  return (
    
    <Box sx={{
      display:'flex',
      justifyContent:'center',
      paddingY: 2
      }}>
        
      <TextField placeholder='Search' sx={{
        width:'25%',
        '@media (max-width: 576px)': {
          width:300
        },
        '@media (max-width: 375px)': {
          width:300
        }
        }}
        spellCheck={false}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onSearch(value)}/>
        
    </Box>

  )

}

export default SearchBox