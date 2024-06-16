import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Card, Container, Divider, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function TestMUI() {
  let cards = ["first", "second", "third", "etc."];
  return (
    <Container fixed maxWidth="lg">
      <center>
        <Typography variant="h4" sx={{ justify: "center" }}>
          Тестовая разметка на базе Material UI
        </Typography>
      </center>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup variant="outlined" aria-label="Basic button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup variant="text" aria-label="Basic button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>

        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>

        <Grid item xs={6} md={3}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid item xs={6} md={9}>
          <Item>xs=6 md=4</Item>
        </Grid>
      </Grid>

      <br />

      <Typography variant="h5" sx={{ justify: "center" }}>
        Типа товары:
      </Typography>
      <Grid container spacing={2}>
        {new Array(8).fill(null).map((_, i) => (
          <Grid item xs={12} md={3}>
            <Item elevation={i + 1}>
              <Typography>Product №{i + 1}</Typography>
              <br />
              xs=12 md=3
            </Item>
          </Grid>
        ))}
        <Grid item xs={3} md={3}>
          <Paper>Test 1</Paper>
        </Grid>
        <Grid item xs={3} md={9}>
          {cards.map((item, index) => (
            <Card elevation={5} sx={{ width: 275 }}>
              <CardContent>
                <Typography variant="h5">Card {index}</Typography>
                <Divider flexItem />
                <Typography>{item}</Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>

      <br />
      <Paper>Test 3</Paper>
      <br />

      <Card elevation={5} sx={{ width: 275 }}>
        <CardContent>
          <Typography variant="h5">Card here</Typography>
          <Divider flexItem />
        </CardContent>
      </Card>
    </Container>
  );
}

export default TestMUI;
