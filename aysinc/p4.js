//Promise
//非同期処理をより簡単に、可読性が上がるようにかけるようにしたもの

//Promise => then || catch => finally

new Promise((resolve, reject) => {
    console.log('Promise');
    // resolve("hai");
    setTimeout(() => {
        reject("hello");
    }, 1000)
}).then((data) => {
    console.log('then1' + data);
    // throw new Error();
    return data;
}).then((data) => {
    console.log('then2' + data);
    return data;
}).then((data) => {
    console.log('then3' + data);
    return data;
}).catch((data) => {
    console.log('catch1' + data);
    return data;
}).then((data) => {
    console.log('then4' + data);
    return data;
}).finally(() => {
    console.log('finally');
});

console.log('global end');