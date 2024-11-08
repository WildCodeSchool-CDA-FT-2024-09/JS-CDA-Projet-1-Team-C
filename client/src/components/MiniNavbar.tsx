import { Link, useLocation, useParams } from "react-router-dom";
import { Stack, Link as MUILink, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupsIcon from "@mui/icons-material/Groups";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import AlarmIcon from "@mui/icons-material/Alarm";

const buttonStyle = {
  display: "inline-block",
  padding: ".5em .75em",
  color: "primary.contrastText",
  backgroundColor: "primary.main",
  textTransform: "uppercase",
  borderRadius: "4px",
  textDecoration: "none",
  textAlign: "center",
  "&:hover": {
    backgroundColor: "primary.dark",
  },
};

export default function MiniNavbar() {
  const { competitionId } = useParams();
  const location = useLocation();
  const currentPage = location.pathname.split("/").at(-1);

  const pages = [
    {
      title: "Tableau de bord",
      icon: <DashboardIcon />,
      to: "/manage/competitions",
    },
    {
      title: "Jurys",
      icon: <GroupsIcon />,
      to: `/manage/competitions/${competitionId}/juries`,
    },
    {
      title: "Teams",
      icon: <Diversity3Icon />,
      to: `/manage/competitions/${competitionId}/teams`,
    },
    {
      title: "Planning",
      icon: <AlarmIcon />,
      to: `/manage/competitions/${competitionId}/planning`,
    },
  ];

  return (
    <div style={{ marginBottom: "1em" }}>
      <Stack direction="row" spacing={2} sx={{ justifyContent: "flex-end" }}>
        {pages &&
          pages
            .filter((page) => !page.to.includes(currentPage as string))
            .map((page) => (
              <MUILink
                key={page.title}
                component={Link}
                to={page.to}
                sx={buttonStyle}
              >
                <Typography variant="body1" component="span">
                  <Stack direction="row" spacing={1}>
                    {page.icon} <span>{page.title}</span>
                  </Stack>
                </Typography>
              </MUILink>
            ))}
      </Stack>
    </div>
  );
}
