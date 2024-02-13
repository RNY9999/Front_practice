//fetch
// console.log(fetch('./users.json'));
fetch('./users.json').then((response) => {
    console.log(response);
    return response.json();
}).then((json) => {
    console.log(json);
    for(const user of json) {
        console.log(`I'm ${user.name}, ${user.age} years old`)
    }
});