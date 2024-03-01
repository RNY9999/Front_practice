function a() {
    setTimeout(() => {
        console.log('task1 done');
        b();
    }, 1000);

    console.log('fn a done')
}

function b() {
    console.log('fn b done');
}

a(b);

// b();