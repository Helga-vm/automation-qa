export class User {
    constructor(){}

    async fetchUser(id){
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            const userData = await response.json();
            return userData;
        } catch (err){
            console.log('Error ', err.message);
        }
    }
}