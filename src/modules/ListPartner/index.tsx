import React, { useEffect, useState } from "react";
import { useStore } from "../../mobx/store";
import {
  Box,
  CircularProgress,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ListPartner: React.FC = () => {
  const { listPartnerStore, deletePartnerStore } = useStore();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchListData = async () => {
      setIsLoading(true);
      try {
        await listPartnerStore.setListPartner();
      } finally {
        setIsLoading(false);
      }
    };
    fetchListData();
  }, []);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleDelete = async (partnerId: string) => {
    await deletePartnerStore.delPartner(partnerId);
    if (!deletePartnerStore.isError) {
      alert("Parceiro excluido com sucesso!");
      window.location.reload();
      await listPartnerStore.setListPartner();
    } else {
      alert("Failed to delete partner");
    }
  };

  const filteredRows = searchQuery
    ? listPartnerStore.listPartner?.filter((row: any) =>
        row.companyName.toLowerCase().includes(searchQuery)
      ) || []
    : listPartnerStore.listPartner || [];

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Paper
      sx={{ width: "100%", overflow: "hidden", backgroundColor: "transparent" }}
    >
      <Box sx={{ padding: 2 }}>
        <TextField
          fullWidth
          label="Buscar parceiro"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          margin="normal"
          sx={{
            backgroundColor: "white",
            borderRadius: 1,
            ".MuiInputBase-input": {
              color: "black",
            },
          }}
        />
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Company Name</TableCell>
              <TableCell align="right">Collaborators Count</TableCell>
              <TableCell align="right">Created At</TableCell>
              <TableCell align="right">Last Submit</TableCell>
              <TableCell align="right">Is Active</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.companyName}
                  </TableCell>
                  <TableCell align="right">{row.collaboratorsCount}</TableCell>
                  <TableCell align="right">{row.createdAt}</TableCell>
                  <TableCell align="right">{row.lastSubmit}</TableCell>
                  <TableCell align="right">
                    {row.isActive ? "Yes" : "No"}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton aria-label="edit">
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      onClick={() => handleDelete(row.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default ListPartner;
