const {addToDo, getToDos} = require ("../controllers/todoController"),
    express = require("express"),
    router = express.Router();

router.post('/addTodo', addToDo);
router.get("/getTodos", getToDos);

module.exports = router;