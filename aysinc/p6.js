// Promiseと並列処理

function sleep(val) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(val++);
            resolve(val);
        }, val * 500);
    })
}


// Promise.all([sleep(2), sleep(3), sleep(4)]).then((val) => {
//     console.log(val);
// });
// Promise.race([sleep(2), sleep(3), sleep(4)]).then((val) => {
//     console.log(val);
// });
Promise.allSettled([sleep(2), sleep(3), sleep(4)]).then((val) => {
    console.log(val);
});

// sleep(0).then((val) => {
//     return Promise.all([sleep(2), sleep(3), sleep(4)]);
// }).then((val) => {
//     return sleep(val);
// }).then((val) => {
//     return sleep(val);
// }).then((val) => {
//     return sleep(val);
// })