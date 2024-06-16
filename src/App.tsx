// General
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AppBar,
  Button,
  Container,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material";

import Store from "./Store";

const pages = ["Products", "Pricing", "Blog"];

function App() {
  return (
    <Container fixed maxWidth="lg">
      <AppBar position="static" sx={{ marginBottom: 3 }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          {pages.map((page) => (
            <Button key={page} sx={{ my: 2, color: "white", display: "block" }}>
              {page}
            </Button>
          ))}
        </Toolbar>
      </AppBar>

      <Store />
    </Container>
  );
}

export default App;
