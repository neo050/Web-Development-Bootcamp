import {createRoot} from "react-dom/client";
import App from "./components/App";

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

createRoot(document.getElementById("root")).render(<App/>);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
