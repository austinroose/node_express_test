const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    name:{
       type: String,
       unique: false,
       required: true, 
    },
    description: {
        type: String,
        unique: false,
        required: true,
    }
})

const ToDo = mongoose.model("Todo", TodoSchema);

module.exports = ToDo;