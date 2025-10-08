import { ToDo } from "./ToDo.js";
import { User } from "./User.js";

const toDoObj = new ToDo().fetchToDo(19)
    .then(console.log);

const userObj = new User().fetchUser(3)
    .then(console.log);