function generatePassword(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%()*+-./:;?@[_]{}~';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

const password20 = generatePassword(20);
console.log('20文字');
console.log(password20);

const password21 = generatePassword(21);
console.log('21文字');
console.log(password21);

const password6 = generatePassword(6);
console.log('6文字');
console.log(password6);

const password5 = generatePassword(5);
console.log('5文字');
console.log(password5);