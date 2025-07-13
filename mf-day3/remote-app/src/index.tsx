import { createRoot } from "react-dom/client";
import Button from "./Button";

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<div><h2>Remote App Preview</h2><Button /></div>);
