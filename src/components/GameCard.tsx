import { Card, Typography, Box, CardContent, Button } from '@mui/material';

interface GameProps {
  title: string;
  fileSize: string;
  platform: string;
  downloadlink: string;
}

const GameCard = ({ title, fileSize, platform, downloadlink }: GameProps) => {
  const handledownload = () => {

    window.open(downloadlink, '_blank');
    
  };

  return (
    <Card variant="outlined" id="card">
      
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <CardContent>

          <Typography
            variant="h5"
            color="white"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            {title}
          </Typography>
          
          <Box sx={{marginTop: "20px"}}>
            <Typography color='grey' sx={{padding: 0}}>Files size: {fileSize}</Typography>
            <Typography color='grey' sx={{padding: 0}}>Platform: {platform}</Typography>
          </Box>

        </CardContent>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 2,
          }}
        >
          <Button variant="outlined" onClick={handledownload}>
            Download
          </Button>

        </Box>

      </Box>

    </Card>
  );
};

export default GameCard;
