import {
  Typography,
  Box,
  Stack,
  Grid,
  Card,
  CardContent,
  CardHeader,
  useTheme,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

// Icons
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import WebIcon from "@mui/icons-material/Web";
import ApiIcon from "@mui/icons-material/Api";
import WebhookIcon from "@mui/icons-material/Webhook";
import { ExtendedCardWithCenterdText } from "../../styled/cards/extended-card-centered-text";
import { homeText } from "./text/home-text";

export function HomePage() {
  const theme = useTheme();
  return (
    <Stack display={"flex"} alignItems={"center"} spacing={2}>
      <Typography
        gutterBottom
        variant="h3"
        component="div"
        textAlign={"center"}
      >
        Full Stack Software Engineer & DevOps
      </Typography>
      <Typography variant={"h6"} maxWidth={"80%"} textAlign={"center"}>
        You are always a student, never a master. You have to keep moving
        forward
      </Typography>
      <Box
        component="img"
        sx={{
          maxWidth: "100%",
        }}
        title="Cartoon Styled"
        alt="Cartoon styled"
        src="static/images/home/homepage-image-1.png"
      />
      <Box width={"100%"}>
        <Card
          sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 0 }}
        >
          <CardHeader
            sx={{ alignItems: "center", color: "white" }}
            title={
              <Box textAlign={"center"}>
                <Typography variant={"h4"}>
                  Hi! I'm Pol, nice to meet you!
                </Typography>
              </Box>
            }
          ></CardHeader>
          <CardContent sx={{ alignItems: "center" }}>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              alignItems={"center"}
              textAlign={"center"}
            ></Typography>
            <Box display={"flex"} justifyContent={"center"}>
              <Typography
                textAlign={"center"}
                variant="body1"
                maxWidth={"80%"}
                color={theme.palette.primary.contrastText}
              >
                {homeText.introduction}
              </Typography>
            </Box>
            <br></br>
            <br></br>
            <Box display={"flex"} justifyContent={"center"}>
              <Stack direction={"row"} alignItems={"center"} spacing={2}>
                <FitnessCenterIcon
                  fontSize="large"
                  sx={{ color: theme.palette.secondary.contrastText }}
                />
                <Typography
                  color={theme.palette.secondary.contrastText}
                  variant={"h4"}
                >
                  Skills
                </Typography>
              </Stack>
            </Box>
            <br></br>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <ExtendedCardWithCenterdText
                  title="Back-End"
                  icon={<ApiIcon fontSize="medium" />}
                >
                  <Typography>
                  {homeText.backEndHeader}
                  </Typography>
                  <br></br>
                  <Typography variant={"h6"}>Langauges</Typography>
                  <Typography variant={"body1"}>
                    Python 3, C#, Typescript
                  </Typography>
                  <br></br>
                  <Typography variant={"h6"}>Frameworks</Typography>
                  <Typography variant={"body1"}>
                    FastAPI, Flask, .Net
                  </Typography>
                  <br></br>
                  <Typography variant={"h6"}>Dev-Tools</Typography>
                  <List>
                    <ListItem disablePadding sx={{ textAlign: "center" }}>
                      <ListItemText primary="VS Code" />
                    </ListItem>
                    <ListItem disablePadding sx={{ textAlign: "center" }}>
                      <ListItemText primary="Visual Studio" />
                    </ListItem>
                    <ListItem disablePadding sx={{ textAlign: "center" }}>
                      <ListItemText primary="Github" />
                    </ListItem>
                    <ListItem disablePadding sx={{ textAlign: "center" }}>
                      <ListItemText primary="Postman" />
                    </ListItem>
                  </List>
                </ExtendedCardWithCenterdText>
              </Grid>
              <Grid item xs={12} sm={4}>
                <ExtendedCardWithCenterdText
                  title="Front-End"
                  icon={<WebIcon fontSize="medium" />}
                >
                  <Typography>
                    {homeText.frontEndHeader}
                  </Typography>
                  <br></br>
                  <Typography variant={"h6"}>Langauges</Typography>
                  <Typography variant={"body1"}>
                    Javascript, Typescript
                  </Typography>
                  <br></br>
                  <Typography variant={"h6"}>Frameworks</Typography>
                  <Typography variant={"body1"}>Angular, React</Typography>
                  <br></br>
                  <Typography variant={"h6"}>Dev-Tools</Typography>
                  <List>
                    <ListItem disablePadding sx={{ textAlign: "center" }}>
                      <ListItemText primary="VS Code" />
                    </ListItem>
                    <ListItem disablePadding sx={{ textAlign: "center" }}>
                      <ListItemText primary="Github" />
                    </ListItem>
                    <ListItem disablePadding sx={{ textAlign: "center" }}>
                      <ListItemText primary="MUI" />
                    </ListItem>
                  </List>
                </ExtendedCardWithCenterdText>
              </Grid>
              <Grid item xs={12} sm={4}>
                <ExtendedCardWithCenterdText
                  title="DevOps"
                  icon={<WebhookIcon fontSize="medium" />}
                >
                  <Typography>
                  {homeText.devOpsHeader}
                  </Typography>
                  <br />
                  <Typography variant={"h6"}>Tools</Typography>
                  <List>
                    <ListItem disablePadding sx={{ textAlign: "center" }}>
                      <ListItemText primary="Docker" />
                    </ListItem>
                    <ListItem disablePadding sx={{ textAlign: "center" }}>
                      <ListItemText primary="Jenkins" />
                    </ListItem>
                    <ListItem disablePadding sx={{ textAlign: "center" }}>
                      <ListItemText primary="Github Actions" />
                    </ListItem>
                    <ListItem disablePadding sx={{ textAlign: "center" }}>
                      <ListItemText primary="Grafana" />
                    </ListItem>
                    <ListItem disablePadding sx={{ textAlign: "center" }}>
                      <ListItemText primary="Kubernetes" />
                    </ListItem>
                    <ListItem disablePadding sx={{ textAlign: "center" }}>
                      <ListItemText primary="Ansible" />
                    </ListItem>
                    <ListItem disablePadding sx={{ textAlign: "center" }}>
                      <ListItemText primary="OCP" />
                    </ListItem>
                  </List>
                  <Typography variant={"h6"}>Cloud Platforms</Typography>
                  AWS, Azure
                </ExtendedCardWithCenterdText>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Stack>
  );
}
