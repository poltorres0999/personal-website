import { Box, Divider, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import CopyrightIcon from "@mui/icons-material/Copyright";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export function Footer() {
  return (
    <footer
      style={{ color: "gray", position: "static", bottom: 0, marginTop: 25 }}
    >
      <Box textAlign={"center"}>
        <Divider variant="middle" sx={{ marginBottom: 5 }}></Divider>
        <Stack spacing={3}>
          <Stack
            spacing={3}
            direction="row"
            display="flex"
            justifyContent="center"
          >
            <a href="https://github.com/poltorres0999"><GitHubIcon fontSize="large" /></a>
            <a href="https://www.linkedin.com/in/pol-torres-alfonso-187652160/"><LinkedInIcon fontSize="large" /></a>
          </Stack>
          <Typography variant="body1">Made with React and MUI</Typography>
            <Stack direction ="row" spacing={1} display={"flex"} justifyContent="center" alignItems={"center"}>
              <CopyrightIcon />
              <Typography variant="body2">Handrafted by me, 2022</Typography>
            </Stack>
        </Stack>
      </Box>
    </footer>
  );
}
