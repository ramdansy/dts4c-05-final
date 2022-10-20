import {
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

export default function Login() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          width: 275,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardContent>
          <Typography
            sx={{
              my: 2,
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 24,
              color: "black",
            }}
            color="text.secondary"
            gutterBottom
          >
            LOGIN!
          </Typography>
          <TextField fullWidth label="Username" sx={{ my: 2 }}></TextField>
          <TextField
            fullWidth
            label="Password"
            type={"password"}
            sx={{ my: 2 }}
          ></TextField>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={handleChange}
                label={"Keep me logged in"}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            }
            label="Keep me logged in"
          />
        </CardContent>
        <CardContent fullWidth>
          <Button fullWidth variant="contained" sx={{ my: 1 }}>
            Login
          </Button>
          <Button fullWidth sx={{ my: 1 }}>
            Register
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}
