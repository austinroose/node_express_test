const express = require("./config/express.js"),
    mongoose = require("mongoose");
require('dotenv').config()

cron = require("cron");

const port = process.env.PORT || 5000;


const app = express.init();
const server  = require("http").createServer(app);
const io = require("socket.io")(server)

io.of("/api/socket").on("connection", (socket) => {
    console.log("socket.io: User connected: ", socket.id);

    socket.on("disconnect", () => {
        console.log("socket.io: User disconnected: ", socket.id)
    })
})

server.listen(port, () => console.log(`Server now running on port ${port}!`))

// connect to db
console.log(process.env.DB_URI)
mongoose.connect(process.env.DB_URI || require("./config/example.config").db.uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  
const connection = mongoose.connection;

connection.once("open", () => {
console.log("MongoDB database connected");

console.log("Setting change streams");
const todoChangeStream = connection.collection("todos").watch();

todoChangeStream.on("change", (change) => {
    switch (change.operationType) {
    case "insert":
        const todo = {
        _id: change.fullDocument._id,
        name: change.fullDocument.name,
        description: change.fullDocument.description,
        };

        io.of("/api/socket").emit("newTodo", todo);
        break;

    case "delete":
        io.of("/api/socket").emit("deletedTodo", change.documentKey._id);
        break;
    }
});
});

//schedule deletion of todos at midnight
//cron.sc("0 0 0 * * *", async () => {
//await connection.collection("todos").drop();

io.of("/api/socket").emit("todosCleared");


connection.on("error", (error) => console.log("Error: " + error));