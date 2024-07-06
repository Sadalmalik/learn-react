import { useLocation, useParams } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Pagination,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import MultiSelect from "./Components/MultiSelect";

interface ProductProps {
  index: number;
  content: string;
}

function Product(props: ProductProps) {
  return (
    <Card elevation={1} sx={{ width: 175 }}>
      <CardContent>
        <Typography variant="h5">Product #{props.index}</Typography>
        <Divider flexItem />
        <Typography>{props.content}</Typography>
      </CardContent>
    </Card>
  );
}

const names = ["Hits", "Regular", "Discont", "Other"];

function Store() {
  //const location = useLocation();
  //const query = new URLSearchParams(location.search);
  //const page = parseInt(query.get("page") || "1", 10);

  //let params = useParams();
  //let cards = ["first", "second", "third", "etc."];
  //let paginationContext = new PaginationContext("/page/", 6, (_: number) => {});
  //if (params.store_page != null) paginationContext.current = +params.store_page;

  let products = [
    "Regular",
    "Combined",
    "Complex",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "E",
  ];

  const [selectedNames, setSelectedNames] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof selectedNames>) => {
    const {
      target: { value },
    } = event;
    setSelectedNames(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Paper>
          <Box>
            <MultiSelect label="Categories" values={names}></MultiSelect>
            <MultiSelect
              label="Tags"
              chip={true}
              values={names}
              stateKey="roberto"
            ></MultiSelect>
            <MultiSelect
              label="Tags"
              chip={true}
              values={names}
              stateKey="mike"
            ></MultiSelect>
            <MultiSelect
              label="Tags"
              chip={true}
              values={names}
              stateKey="mike"
            ></MultiSelect>
            <MultiSelect label="Tags" chip={true} values={names}></MultiSelect>
          </Box>
        </Paper>
      </Grid>

      <Grid item xs={9}>
        <Stack alignItems="center" paddingY={2}>
          <Pagination
            page={2}
            count={12}
            sx={{ alignSelf: "center" }}
          ></Pagination>
        </Stack>

        <Grid container rowSpacing={5} columnSpacing={0}>
          {products.map((item, index) => (
            <Grid item key={index} xs={3}>
              <Product index={index} content={item} />
            </Grid>
          ))}
        </Grid>

        <Stack alignItems="center" paddingY={2}>
          <Pagination
            page={2}
            count={12}
            sx={{ alignSelf: "center" }}
          ></Pagination>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Store;
