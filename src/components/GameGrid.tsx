import { useState } from "react"
import GameCard from "./GameCard"
import SearchBox from './SearchBox'
import Pagination from './Pagination'
import { Grid, Box, Typography, CircularProgress, Alert, AlertTitle } from '@mui/material';
import fetchGames from "../hooks/fetchGames";
import fetchCount from "../hooks/fetchCount";


const GameGrid = () => {

  const [query, Setquery]= useState("");
  const [platform_options, setPlatform_options]= useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const {count, error}= fetchCount(query);
  const {games, loading}= fetchGames(query, platform_options);

  const handleSearch= (value: string, options: string[]) => {

    Setquery(value);
    setPlatform_options(options);
    setCurrentPage(1);

  }

  const handlePageChange = (page: number) => {

    setCurrentPage(page);
    
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = games.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(games.length / itemsPerPage);

  return (
    <>
      <SearchBox onSearch={handleSearch} />

      { error ? (

        <Typography variant="h3" color="white" sx={{ margin: 2, textAlign: "center"}}>
          {error}
        </Typography>
        
        )
      
        : count && (

        <Typography variant="h3" color="white" sx={{ margin: 2, textAlign: "center"}}>
          {count}
        </Typography>

        )
      
      }

      {loading ? (

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress sx={{ margin: "0 auto" }} />
        </Box>
        
      ) : (

        <>

          {query && games.length === 0 && (
            
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
              <Alert id="alert" variant="outlined" severity="error">
                <AlertTitle>Not Found</AlertTitle>
                Maybe <strong>"{query}"</strong> exists in a different Universe
              </Alert>
            </Box>
            
          )}

          <Grid container sx={{ margin: "32px 8px 32px" }}>
            <Grid container item spacing={3} xs={12}>
              {currentItems.map((game, index) => (
                <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                  <GameCard
                    title={game.name}
                    fileSize={game.file_size}
                    platform={game.platforms}
                    downloadlink={game.download_links}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>

          {games.length > itemsPerPage && (
            <Pagination
              page={currentPage}
              totalCount={totalPages}
              handlePageChange={handlePageChange}
            />
          )}

        </>

      )}

    </>
  );
};

export default GameGrid