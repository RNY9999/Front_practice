// promise chaining

function sleep(val) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(val++);
            resolve(val);
        }, 1000);
    })
}

sleep(0).then((val) => {
    return sleep(val);
}).then((val) => {
    return sleep(val);
}).then((val) => {
    return sleep(val);
}).then((val) => {
    return sleep(val);
})