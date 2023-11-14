import { Box, Pagination } from "@mui/material";

interface Props {

    page: number
    totalCount: number
    handlePageChange: (page: number) => void

}

const PaginationComponent = ({ page, totalCount, handlePageChange }: Props) => {

    return (

      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 4 }}>
        <Pagination
          page={page}
          count={totalCount}
          onChange={(_event: React.ChangeEvent<unknown>, page: number) => handlePageChange(page)}
          color="primary"
        />
      </Box>

    );
  };
  
  export default PaginationComponent;
  