import {
  Typography,
  Container,
  Box,
  Stack,
  Grid,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  CardHeader,
  useTheme,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";

// Icons
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import WebIcon from "@mui/icons-material/Web";
import ApiIcon from "@mui/icons-material/Api";
import WebhookIcon from "@mui/icons-material/Webhook";

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
      You are always a student, never a master. You have to keep moving forward
      </Typography>
      <Box
        component="img"
        sx={{
          maxWidth: "100%",
        }}
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
                My name is Pol Torres Alfonso, since I was little I grew curious
                about how computers and the digitial world work, I wonted to be
                an inventor, but since went old fashioned long ago, I became a
                Software Engineer. I've been working as a Software Engineer for
                more than three years, mainly as a Full-Stack Developer. I love
                designing software solutions and bringing ideas to live through
                coding, my passion is to use technology to make peoples live
                easier. My preferred languages at the time are Python and
                Typescript, and I am enthusiast of the DevOps paradigm.
              </Typography>
            </Box>
            <br></br>
            <br></br>
            <Box display={"flex"} justifyContent={"center"}>
              <Stack direction={"row"} alignItems={"center"} spacing={2}>
                <FitnessCenterIcon fontSize="large" sx={{color:theme.palette.secondary.contrastText}} />
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
                <Card
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.secondary.contrastText,
                    height: "100%",
                    borderRadius: "7.5%",
                  }}
                >
                  <CardHeader
                    sx={{
                      alignItems: "center",
                      color: theme.palette.secondary.contrastText,
                    }}
                    title={
                      <Box>
                        <Stack
                          justifyContent={"center"}
                          direction={"row"}
                          alignItems={"center"}
                          spacing={1}
                        >
                          <ApiIcon fontSize="medium" />
                          <Typography fontWeight={"bold"} variant={"h6"}>
                            Back-End
                          </Typography>
                        </Stack>
                      </Box>
                    }
                  ></CardHeader>
                  <Divider
                    variant="middle"
                    sx={{
                      backgroundColor: theme.palette.secondary.contrastText,
                    }}
                  />
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography>
                      I value simple content structure, clean design patterns,
                      and thoughtful interactions.
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
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.secondary.contrastText,
                    height: "100%",
                    borderRadius: "7.5%",
                  }}
                >
                  <CardHeader
                    sx={{ alignItems: "center", color: "white" }}
                    title={
                      <Box justifyContent={"center"}>
                        <Stack
                          justifyContent={"center"}
                          direction={"row"}
                          alignItems={"center"}
                          spacing={1}
                        >
                          <WebIcon fontSize="medium" />
                          <Typography fontWeight={"bold"} variant={"h6"}>
                            Front-End
                          </Typography>
                        </Stack>
                      </Box>
                    }
                  ></CardHeader>
                  <Divider
                    variant="middle"
                    sx={{
                      backgroundColor: theme.palette.secondary.contrastText,
                    }}
                  />
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography>
                      I like to code things from scratch, and enjoy bringing
                      ideas to life in the browser.
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
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.secondary.contrastText,
                    height: "100%",
                    borderRadius: "7.5%",
                  }}
                >
                  <CardHeader
                    sx={{ alignItems: "center", color: "white" }}
                    title={
                      <Box justifyContent={"center"}>
                        <Stack
                          justifyContent={"center"}
                          direction={"row"}
                          alignItems={"center"}
                          spacing={1}
                        >
                          <WebhookIcon fontSize="medium" />
                          <Typography fontWeight={"bold"} variant={"h6"}>
                            DevOps
                          </Typography>
                        </Stack>
                      </Box>
                    }
                  ></CardHeader>
                  <Divider
                    variant="middle"
                    sx={{
                      backgroundColor: theme.palette.secondary.contrastText,
                    }}
                  />
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography>
                      I belive that Contaianrization, Automation and Monitoring
                      makes applications more reliable and improves the
                      deployment lifecycle.
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
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Stack>
  );
}
