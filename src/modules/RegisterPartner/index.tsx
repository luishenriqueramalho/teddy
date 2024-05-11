import React, { useState } from "react";
import { useStore } from "../../mobx/store";
import { observer } from "mobx-react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";

const RegisterPartner = observer(() => {
  const { registerPartnerStore } = useStore();

  const [partner, setPartner] = useState({
    companyName: "",
    collaboratorsCount: "",
    createdAt: "",
    lastSubmit: "",
    isActive: false,
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setPartner((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await registerPartnerStore.postRegisterPartner(partner);
    if (!registerPartnerStore.isError) {
      alert("Partner registered successfully!");
    } else {
      alert("Failed to register partner");
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 500,
        mx: "auto",
        mt: 4,
        color: "white",
        p: 2,
      }}
    >
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <TextField
            label="Company Name"
            type="text"
            name="companyName"
            value={partner.companyName}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            sx={{ backgroundColor: "white", borderRadius: "5px" }}
          />
          <TextField
            label="Collaborators Count"
            type="number"
            name="collaboratorsCount"
            value={partner.collaboratorsCount}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            sx={{ backgroundColor: "white", borderRadius: "5px" }}
          />
          <TextField
            label="Created At"
            type="date"
            name="createdAt"
            value={partner.createdAt}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ backgroundColor: "white", borderRadius: "5px" }}
          />
          <TextField
            label="Last Submit"
            type="date"
            name="lastSubmit"
            value={partner.lastSubmit}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ backgroundColor: "white", borderRadius: "5px" }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={partner.isActive}
                onChange={handleChange}
                name="isActive"
              />
            }
            label="Ativar parceiro"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={registerPartnerStore.isLoading}
          >
            Cadastrar Parceiro
          </Button>
        </FormGroup>
      </form>
    </Box>
  );
});

export default RegisterPartner;
