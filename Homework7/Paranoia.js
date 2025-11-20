var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];
function filterValidEmails(users) {
    const regex = /^[A-Za-z0-9]+(?:\.[A-Za-z0-9]+)?@(gmail\.com|yahoo\.com)$/;
return users
.filter (Object =>regex.test(Object.email))
.map(Object => Object.email);
}
const trusted = filterValidEmails(arr);
console.log(trusted);