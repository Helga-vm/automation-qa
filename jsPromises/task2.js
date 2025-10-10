function fetchToDo(id){
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response)=>response.json());
}

function fetchUser(id){
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response)=>response.json());
}

const result1 = Promise.all([fetchToDo(3),fetchUser(7)])
   .then(console.log)
   .catch((err) => console.log("Error ", err.message));

const result2 = Promise.race([fetchToDo(100),fetchUser(3)])
    .then(console.log)
    .catch((err) => console.log("Error ", err.message));

