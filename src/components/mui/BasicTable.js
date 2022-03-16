import React, {useState, useEffect} from 'react';
import {TablePagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core';
import axios from 'axios';

const BasicTable = () => {
  const [apiData, setapiData] = useState([]);
  const [page, setpage] = useState(0);
  const [rowPerPage, setrowPerPage] = useState(3);

  useEffect(() => {
    loadData();
  }, [])
  

  const loadData = async() => {
    const data = await axios.get('https://jsonplaceholder.typicode.com/users');
    setapiData(data.data);
  }

  const onChangePage = (event, nextPage) => {
    setpage(nextPage);
  }

  const onRowsPerPageChange = (ev) => {
    setrowPerPage(ev.target.value);
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Address&nbsp;(city)</TableCell>
            <TableCell align="left">Website</TableCell>
            <TableCell align="left">Company</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {apiData.slice(page*rowPerPage, page*rowPerPage + rowPerPage).map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.address.city}</TableCell>
              <TableCell align="left">{row.website}</TableCell>
              <TableCell align="left">{row.company.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[3, 5, 10, 15, 20]}
        count={apiData.length}// total
        rowsPerPage={rowPerPage} // limit
        page={page} // data on single page
        onPageChange={onChangePage}
        onRowsPerPageChange={onRowsPerPageChange}
      />
    </TableContainer>
  );
};
export default BasicTable;
