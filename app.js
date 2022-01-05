if (process.env.NODE_ENV === "development" || !process.env.NODE_ENV) {
    require("dotenv").config();
}

const express = require("express");
const app = express();

const PORT = process.env.PORT || 2022;

require("./config/dbConnect");

// config form body untuk frontend
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// config form body untuk frontend

// config router REST API and errHandler and CORS
const cors=require("cors");
const corsConfig=require("./middleware/cors");
const errHandler=require("./middleware/errHandler");
const mainRoute=require("./router/index");
app.use("/api/v1",cors(corsConfig),mainRoute);
app.use(errHandler);
// config router REST API and errHandler and CORS

// config toobusy
// reference : https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html#monitor-the-event-loop
const toobusy = require('toobusy-js');
app.use(function (req, res, next) {
    if (toobusy()) {
        res.send(503, "Server Too Busy");
    } else {
        next();
    }
});
// config toobusy

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server is running ${PORT}`);
});
