import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3001;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const API_URL = "https://secrets-api.appbrewery.com/random";

// HINTS:
// 1. Import express and axios

// 2. Create an express app and set the port number.

// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.
app.get("/",async(req,res)=>
    {
        try
        {
            const response = await axios.get(API_URL);
            
            res.render("index.ejs",{secret:response.data.secret,user:response.data.username});
            
        }
        catch(error)
        {
            console.log(JSON.stringify(error.response.data));
        }

    });

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });