let express = require ("express");
let PORT = process.env.PORT || 9012;
require("dotenv").config();

let app = express();
app.use(express.json());

let authRoutes = require("./routes/authRoutes");
app.use(authRoutes);

let helloRoutes = require("./routes/helloRoutes");
app.use(helloRoutes);

app.listen(PORT, function(){
    console.log("application listening on port", PORT)
});

