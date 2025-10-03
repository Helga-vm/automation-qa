const users = [
    {name: "Porter", isAdult: true, email: "porter1988@email.com"},
    {name: "Basil", isAccessEnabled:false},
    {name: "Dean", isAdult: false, email: "dean.thomas123456@email.com"}
];

for (const{name,isAdult = false,email = "unknown", isAccessEnabled = true} of users){
    console.log(`The user ${name} is${isAdult?" ":" not"}an adult with email ${email}${isAccessEnabled?"":" and NO access"}`)
}