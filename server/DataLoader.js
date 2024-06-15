import { parse } from "csv-parse/sync";

const GOOGLE_SHEET =
  "2PACX-1vSxm8NuQzmcx1VnbQjCRBwGpePaZf57WZJ8UvkwP9fQdT4ua9VeWbl8tu0voR_L4WV2Etkj7jAlc-VW";
const SETTINGS_SHEET_ID = 0;
const PRODUCTS_SHEET_ID = 1431473448;

async function DownloadCSV(sheet_id) {
  const res = await fetch(
    `https://docs.google.com/spreadsheets/d/e/${GOOGLE_SHEET}/pub?gid=${sheet_id}&single=true&output=csv`
  );
  const raw = await res.text();
  const csv = parse(raw);
  return csv;
}

function CSVToSettings(csv) {
  const config = {};
  csv[0].forEach((key, index) => {
    config[key] = csv[1][index];
  });
  return config;
}

function CSVToProducts(csv) {
  const header = csv[0];
  const products = [];
  for (let i = 1; i < csv.length; i++) {
    let item = {};
    header.forEach((key, index) => {
      let val = csv[i][index];
      if (val == "TRUE") val = true;
      if (val == "FALSE") val = false;
      item[key] = val;
    });
    products.push(item);
  }
  return products;
}

async function LoadData() {
  return {
    settings: CSVToSettings(await DownloadCSV(SETTINGS_SHEET_ID)),
    products: CSVToProducts(await DownloadCSV(PRODUCTS_SHEET_ID)),
  };
}

export default LoadData;
