import { Link as RouterLink } from "react-router-dom";
import { Link as MUILink, Typography } from "@mui/material";

const buttonStyle = {
  display: "inline-block",
  padding: "8px 16px",
  color: "black",
  backgroundColor: "primary.main",
  borderRadius: "4px",
  textDecoration: "none",
  width: "100%",
  textAlign: "center",
  "&:hover": {
    backgroundColor: "primary.dark",
  },
};

type BtnLinkProps = {
  to: string;
  content: string;
};

export default function BtnLink({ to, content }: BtnLinkProps) {
  return (
    <MUILink component={RouterLink} to={to} sx={buttonStyle}>
      <Typography variant="body1" component="span">
        {content}
      </Typography>
    </MUILink>
  );
}
