const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
// const apiRoutes = require("./routes/api-routes");
// const htmlRoutes = require("./routes/html-routes");

const PORT = process.env.PORT || 3000; 

const app = express(); 

app.use(morgan("dev")); 
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessTracker", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}); 

// app.use(apiRoutes);
// app.use(htmlRoutes);

app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

app.listen(PORT, ()=>{
    console.log(`App listening on port: ${PORT}`);
}); 