function sleep(callback, val) {
    setTimeout(() => {
        console.log(val++);
        callback(val);
    }, 1000)
}

sleep((val) => {
    sleep((val) => {
        sleep((val) => {
            sleep((val) => {
                sleep((val) => {
                    sleep((val) => {
                        sleep((val) => {
                
                        }, val);
                    }, val);
                }, val);
            }, val);
        }, val);
    }, val);
}, 0);