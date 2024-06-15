import path from "path";
import { fileURLToPath } from "url";

function GetStaticDirectory(folder) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const __static_path = path.join(__dirname, folder);
  return __static_path;
}

export default GetStaticDirectory;
