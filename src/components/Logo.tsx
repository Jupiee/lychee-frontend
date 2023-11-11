import lychee from '../assets/lychee.webp'
import { Box } from '@mui/material'

const Logo = () => {

  return (

    <Box sx={{display:'flex', justifyContent:'center', padding: '50px', paddingY: 2}}>

      <a href="/">
        <img
          src={lychee}
          alt="lychee.png"
          draggable="false"
        />
      </a>

    </Box>

  )

}

export default Logo