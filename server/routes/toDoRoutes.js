const {addToDo, getToDos} = require ("../controllers/todoController"),
    express = require("express"),
    router = express.Router();

router.post('/addTodo', addTodo);
router.get("getTodos", getToDos);

module.exports = router;