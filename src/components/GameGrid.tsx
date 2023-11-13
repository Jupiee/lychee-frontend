import { useState } from "react"
import GameCard from "./GameCard"
import SearchBox from './SearchBox'
import { Pagination, Grid, Box, Typography, CircularProgress } from '@mui/material';
import fetchGames from "../hooks/fetchGames";
import fetchCount from "../hooks/fetchCount";


const GameGrid = () => {

  const [query, Setquery]= useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const {count}= fetchCount(query);
  const {games, loading}= fetchGames(query);

  const handleSearch= (value: string) => {

    Setquery(value);
    setCurrentPage(1);

  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = games.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const handlePageChange = (page: number) => {

    setCurrentPage(page);
    
  };

  const totalPages = Math.ceil(games.length / itemsPerPage);


  return (
    <>
      <SearchBox onSearch={handleSearch} />

      {count && 

        <Typography variant="h3" color="white" sx={{ margin: 2, textAlign: "center"}}>
          {count}
        </Typography>
      
      }

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress sx={{ margin: "0 auto" }} />
        </Box>
      ) : (
        <>
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
            <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 4 }}>
              <Pagination
                page={currentPage}
                count={totalPages}
                onChange={(_event: React.ChangeEvent<unknown>, page: number) => handlePageChange(page)}
                color="primary"
              />
            </Box>
          )}
        </>
      )}
    </>
  );
};

export default GameGrid