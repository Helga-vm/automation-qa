async function fetchToDo(id){
    try{
        const response = await fetch (`https://jsonplaceholder.typicode.com/todos/${id}`);
        const toDoData = await response.json();
        return toDoData;
    }catch (error) {
            console.log('Error in fetching todos: ', error.message);
            throw error;
    }
}

async function fetchUser(id){
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const userData = await response.json();
        return userData;
    } catch (error){
            console.log('Error in fetching user: ', error.message);
            throw error;
    }
}

const result1 = Promise.all([fetchToDo(3),fetchUser(7)])
   .then(console.log)
   .catch((err) => console.log("Error is ", err.message));

const result2 = Promise.race([fetchToDo(100),fetchUser(3)])
    .then(console.log)
    .catch((err) => console.log("Error is ", err.message));