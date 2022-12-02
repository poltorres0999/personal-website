import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";


type Props = {
  title: string;
  icon: React.ReactNode | null;
  children?: React.ReactNode;
};

export function ExtendedCardWithCenterdText(props: Props) {
  const theme = useTheme();
  return (
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
              {props.icon}
              <Typography fontWeight={"bold"} variant={"h6"}>
                {props.title}
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
      <CardContent sx={{ textAlign: "center" }}>{props.children}</CardContent>
    </Card>
  );
}
