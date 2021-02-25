const path = require('path'),
    express = require('express'),
    morgan = require("morgan"), // HTTP request logger middleware
    bodyParser = require("body-parser"), // can access request body under req.body()
    toDoRoutes = require("../routes/toDoRoutes"),
    cors = require("cors");

module.exports.init = () => {
    
    const app = express();

    app.use(cors());

    app.use(morgan("dev"))

    app.use(bodyParser.urlencoded({ extended: true}))
    app.use(bodyParser.json());

    app.use("/api/todo", toDoRoutes);

    if (process.env.NODE_ENV === "production") {
        app.use(express.static(path.join(__dirname, '../../client/build')));

        app.get("*", function(req, res) {
            res.sendFile(path.join(__dirname, "../client/build", "index.html"));
        })
    }

    return app;

}
