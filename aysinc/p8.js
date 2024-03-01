//fetch
// console.log(fetch('./users.json'));
// fetch('./users.json').then((response) => {
//     console.log(response);
//     return response.json();
// }).then((json) => {
//     console.log(json);
//     for(const user of json) {
//         console.log(`I'm ${user.name}, ${user.age} years old`);
//     }
// });

async function fetchUsers() {
    const res = await fetch('./users.json');
    const users = await res.json();
    for (const user of users) {
        console.log(`I'm ${user.name}, ${user.age} years old`);
    }
}

fetchUsers();