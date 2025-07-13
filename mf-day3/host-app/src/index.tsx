import { createRoot } from "react-dom/client";
import RemoteButton from "remoteApp/Button"; // loaded at runtime

const App = () => (
  <div>
    <h1>Host App</h1>
    <RemoteButton />
  </div>
);

const container = document.getElementById("root")!;
createRoot(container).render(<App />);
