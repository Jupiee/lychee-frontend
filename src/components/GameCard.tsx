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
    <Card variant="outlined">
      
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <CardContent>

          <Typography
            variant="h5"
            color="white"
            sx={{
              display: 'flex',
              padding: '20px',
              textAlign: 'center',
            }}
          >
            {title}
          </Typography>
          <Typography color='grey'>Files size: {fileSize}</Typography>
          <Typography color='grey'>Platform: {platform}</Typography>

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
