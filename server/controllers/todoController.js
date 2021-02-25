const ToDo = require("../models/ToDo");

const addToDo = async (req, res) => {
    try {
        const todo = await ToDo.create({
            name: req.body.name,
            description: req.body.description,
        });

        return res.json({
            success: true,
            message: "Todo created",
        });
    } catch(error) {
        console.log("Error with adding Todo: ", error);
        return res.json({
            success: false,
            message: "Error with adding todo. See server console."
        });
    };
};

const getToDos = async (req, res) => {
    try {
        const todos = await ToDo.find().select(["-__v"]);

        return res.json({
            success: true,
            message: todos,
        });
    } catch (error) {
        console.log("Error with fetching todos: ", error);
        return res.json({
            success: false,
            message:
                "Error with fetching todos.",
        });
    }
};

module.exports = {
    addToDo,
    getToDos,
};