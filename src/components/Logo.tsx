import lychee from '../assets/lychee.png'
import { Box } from '@mui/material'

const Logo = () => {

  return (

    <Box sx={{display:'flex', justifyContent:'center', padding: '50px', paddingY: 2}}>

      <a href="/">
        <img
          src={lychee}
          alt="lychee.png"
          draggable="false"
          style={{height: '210px', width: '210px'}}
        />
      </a>

    </Box>

  )

}

export default Logo