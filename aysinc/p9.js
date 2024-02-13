// try => catch => finally

async function fetchUsers() {
    const res = await fetch('./users.json');
    console.log(res);
    if(res.ok) {
        const users = await res.json();
        console.log(users.length);
        if(!users.length) {
            throw new Error('no data found');
        }
        return users;
    }
}

class NoDataError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NoDataError';
    }
}

async function init() {
    try {
        const users = await fetchUsers();
        for (const user of users) {
            console.log(`I'm ${user.name}, ${user.age} years old`);
        }
    } catch(e) {
        if(e instanceof NoDataError) {
            console.error(e);
        } else {
            console.error('Oops, something went wrong');
        }
    } finally {
        console.log('bye');
    }

    console.log('end');
}

init();