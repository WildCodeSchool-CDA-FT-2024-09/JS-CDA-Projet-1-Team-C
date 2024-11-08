import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link as MUILink } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

const pages = [
  { content: "Page d'accueil", to: "/" },
  { content: "Tableau de bord", to: "/manage/competitions" },
  { content: "Mon planning", to: "/juries" },
];

function NavBar() {
  // needed despite the existence of Navlink to have only one underlined link even though routes are nested
  const location = useLocation();

  return (
    <AppBar
      color="secondary"
      position="static"
      sx={{
        padding: "16px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
        FLL
      </Typography>

      <Box
        component="nav"
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "right",
          gap: "16px",
        }}
      >
        {pages.map((page) => (
          <MUILink
            key={page.to}
            color="secondary.contrastText"
            component={RouterLink}
            to={page.to}
            variant="body1"
            sx={{
              textTransform: "uppercase",
              textDecoration:
                location.pathname === page.to ? "underline" : "none",
            }}
          >
            {page.content}
          </MUILink>
        ))}
      </Box>
    </AppBar>
  );
}
export default NavBar;
