import { Typography, Grid, Box } from "@mui/material"

const About = () => {

  return (

    <Box sx={{flexGrow: 1, display:'flex', justifyContent:'center', alignItems:'center'}}>

      <Grid container>
        <Grid size={{xs:12}} sx={{textAlign:'center', marginTop:'20px', marginBottom:'10px'}}>
          <Typography variant="h2" color='primary'>Lychee Engine</Typography>
        </Grid>

        <Grid size={{xs:12}} sx={{display:'flex', justifyContent:'center', textAlign:'left', marginBottom:'20px'}}>
          <Typography variant="h6" color='white' component='p'>
            Support the project by donating on <a href="https://ko-fi.com/U7U0EVFHA" target="_blank" rel="noreferrer" style={{color: "#2596be"}}>Ko-fi</a>, It will be appreciated and will help me keep the project alive.
          </Typography>
        </Grid>

        <Grid size={{xs:12}} sx={{textAlign:'center'}}>
          <Typography variant="h3" color='secondary'>What is Lychee Engine?</Typography>
        </Grid>

        <Grid size={{xs:12}} sx={{display:'flex', justifyContent:'center', marginTop:'10px', textAlign:'left'}}>
          <Typography variant="h6" color='white' component='p'>
            Lychee Engine is a fast search engine for downloading emulator games.
          </Typography>
        </Grid>

        <Grid size={{xs:12}} sx={{textAlign:'center', marginTop:'20px', marginBottom:'10px'}}>
          <Typography variant="h3" color='secondary'>What's the point of having another game search engine?</Typography>
        </Grid>

        <Grid size={{xs:12}} sx={{textAlign:'left'}}>
          <Typography variant="h6" color='white' component='p'>
            This search engine is inspired by <a href="https://rezi.one/" target="_blank" rel="noreferrer" style={{color: "#2596be"}}>Rezi</a> and the main goal for this project was no ads, no bullshit
            just a search bar with game cards and download button, simple and fast. Also do not forget that this project is solely for emulator games and targets the audience of emulator gamers.
          </Typography>
        </Grid>

        <Grid size={{xs:12}} sx={{textAlign:'center', marginTop:'20px', marginBottom:'10px'}}>
          <Typography variant="h3" color='secondary'>Do you host the files?</Typography>
        </Grid>

        <Grid size={{xs:12}} sx={{textAlign:'left'}}>
          <Typography variant="h6" color='white' component='p'>
            No, We don't host any of the download links. The download links are scraped from reliable sources so its safe to use Although I would recommend using Internet Download Manager or something
            similar for fast downloading.
          </Typography>
        </Grid>

        <Grid size={{xs:12}} sx={{textAlign:'center', marginTop:'20px', marginBottom:'10px'}}>
          <Typography variant="h3" color='secondary'>Is this Open Source or Is there an API?</Typography>
        </Grid>

        <Grid size={{xs:12}} sx={{display:'flex', justifyContent:'center', textAlign:'left'}}>
          <Typography variant="h6" color='white' component='p'>
            Yes! The <a href='https://github.com/Jupiee/lychee-scraper' target="_blank" rel="noreferrer" style={{color: "#2596be"}}>Scraper</a> and the <a href='https://github.com/Jupiee/open-lychee-api' target="_blank" rel="noreferrer" style={{color: "#2596be"}}>API</a> are open source and free to use.
          </Typography>
        </Grid>

        <Grid size={{xs:12}} sx={{textAlign:'center', marginTop:'20px', marginBottom:'10px'}}>
          <Typography variant="h3" color='secondary'>How does this project works?</Typography>
        </Grid>

        <Grid size={{xs:12}} sx={{display:'flex', justifyContent:'center', textAlign:'left'}}>
          <Typography variant="h6" color='white' component='p'>
            Games are updated at 00:00 UTC every day so you have to wait for 24 hours to get the latest games.
          </Typography>
        </Grid>

        <Grid size={{xs:12}} sx={{textAlign:'center', marginTop:'20px', marginBottom:'10px'}}>
          <Typography variant="h3" color='secondary'>What Sources do you scrape from?</Typography>
        </Grid>

        <Grid size={{xs:12}} sx={{display:'flex', justifyContent:'center', textAlign:'left'}}>
          <Typography variant="h6" color='white' component='p'>
            The data is gathered from:

            <ol>
              <li><a href="https://myrient.erista.me/" target="_blank" rel="noreferrer" style={{color: "#2596be"}}>Myrient</a></li>
              <li><a href="https://edgeemu.net/" target="_blank" rel="noreferrer" style={{color: "#2596be"}}>Edge Emulation</a></li>
              <li><a href="https://archive.org/" target="_blank" rel="noreferrer" style={{color: "#2596be"}}>Internet Archive</a></li>
            </ol> 

          </Typography>
        </Grid>

        <Grid size={{xs:12}} sx={{textAlign:'center', marginTop:'20px', marginBottom:'10px'}}>
          <Typography variant="h3" color='secondary'>What platforms are supported?</Typography>
        </Grid>

        <Grid size={{xs:12}} sx={{display:'flex', justifyContent:'center'}}>
          <Typography variant="h6" color='white' component='p'>
            Currently supported platforms are:
            <ul>
              <li>Game Boy</li>
              <li>Game Boy Advance</li>
              <li>Game Boy Colors</li>
              <li>Nintendo DS</li>
              <li>Nintendo 3DS</li>
              <li>Nintendo Virtual Boy</li>
              <li>Nintendo 64</li>
              <li>Nintendo Entertainment System</li>
              <li>Nintendo GameCube</li>
              <li>Nintendo Switch ( soon )</li>
              <li>Super Nintendo</li>
              <li>PlayStation 1</li>
              <li>PlayStation 2</li>
              <li>PlayStation 3</li>
              <li>PlayStation Portable</li>
              <li>PlayStation Vita</li>
              <li>Wii</li>
              <li>Wii U</li>
              <li>Xbox</li>
              <li>Xbox 360</li>
            </ul>
          </Typography>
        </Grid>


      </Grid>

    </Box>

  )
  
}

export default About;