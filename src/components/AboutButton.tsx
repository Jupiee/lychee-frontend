import Button from '@mui/material/Button'
import InfoIcon from '@mui/icons-material/Info';

const AboutButton = () => {

  return (

    <Button variant="outlined" startIcon={<InfoIcon />} href='/about' sx={{
        padding: '10px',
        margin: '10px',
        width: '110px'
    }}>
    About
    </Button>

  )

}

export default AboutButton