export class ToDo {
    constructor(){}

    async fetchToDo(id){
        try{
            const response = await fetch (`https://jsonplaceholder.typicode.com/todos/${id}`);
            const toDoData = await response.json();
            return toDoData;
        } catch (err){
            console.log('Error ', err.message);
        }
    }
}