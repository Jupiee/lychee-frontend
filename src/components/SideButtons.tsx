import { useState } from 'react';
import { Button, Box, Menu, MenuItem } from '@mui/material';
import { Info, GitHub } from '@mui/icons-material';

const SideButtons = () => {

  const [anchorEl, setAnchorEl] = useState(null);

  const openInNewTab = (url: string) => {

    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null

  }

  const handleClick = (event: any) => {

    setAnchorEl(event.currentTarget);

  };

  const handleClose = () => {

    setAnchorEl(null);

  };

  return (

    <>

    <Box sx={{display: 'grid', width: '33%'}}>
      
      <Button variant="outlined" startIcon={<Info />} href='/about' sx={{
          padding: '10px',
          margin: '10px',
          width: '110px'
      }}>
        About
      </Button>

      <Button variant="outlined" startIcon={<GitHub />} onClick={handleClick} sx={{
          padding: '10px',
          margin: '10px',
          width: '110px'
      }}>
        Github
      </Button>

    </Box>

    <Menu
    anchorEl={anchorEl}
    transformOrigin={{vertical: 'top', horizontal: 'right'}}
    open={Boolean(anchorEl)}
    onClose={handleClose}
    PaperProps={{
      style: {
        minWidth: '110px'
      }
    }}
  >
      <MenuItem onClick={() => openInNewTab('https://github.com/Jupiee/lychee-scraper')}>Scraper</MenuItem>
      <MenuItem onClick={() => openInNewTab('https://github.com/Jupiee/open-lychee-api')}>API</MenuItem>

    </Menu>

    </>

  )

}

export default SideButtons;