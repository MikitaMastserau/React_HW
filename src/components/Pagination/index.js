import Pagination from '@mui/material/Pagination';

export const Pagination = ({ page, handlePageChange }) => {
   return (
      <Pagination count={10} color="darkorange" page={page} onChange={handlePageChange} />
   )
}