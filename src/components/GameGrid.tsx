import { useState, useEffect } from "react"
import apiClient from '../services/api-client';
import GameCard from "./GameCard"
import SearchBox from './SearchBox'
import { Pagination, Grid, Box, Typography, CircularProgress } from '@mui/material';

interface Game {

  name: string
  file_size: string
  date_uploaded: string | null
  platforms: string
  download_links: string
  thumbnail: string | null

}

const GameGrid = () => {

  const [query, Setquery]= useState("");
  const [games, setGames]= useState<Game[]>([]);
  const [_error, setError]= useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState("");
  const itemsPerPage = 6;

  const fetchGames= async () => {

    setLoading(true);

    try {

      if (query) {

      const response= await apiClient.get('/search', {params: {name: query}});
      setGames(response.data);

      }

    } catch (error) {

      setError('Something went wrong');

    } finally {

      setLoading(false);

    }

  };

  const fetchGamecount= async () => {
    
    try {
      
      if (query == "") {

        const response= await apiClient.get('/');
        setCount(response.data);

      }
      

    } catch (error) {

      setError('Something went wrong');

    }

  };

  useEffect(() => {

    fetchGames();
    fetchGamecount();

  }, [query]);

  const handleSearch= (value: string) => {

    Setquery(value);
    setCurrentPage(1);
    fetchGames();

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
    <Box>
      <SearchBox onSearch={handleSearch} />

      {count && 

        <Typography variant="h3" color="white" sx={{ padding: 2, textAlign: "center"}}>
          {count}
        </Typography>
      
      }

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress sx={{ margin: "0 auto" }} />
        </Box>
      ) : (
        <>
          <Grid container sx={{ padding: 4 }}>
            <Grid container item spacing={3} xs={12}>
              {currentItems.map((game, index) => (
                <Grid item xs={12} sm={4} key={index}>
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
    </Box>
  );
};

export default GameGrid