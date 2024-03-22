console.log('hello');

function sleep(ms) {
    const startTime = new Date();
    console.log(`今から${ms}ミリ秒メインスレッドを占有します`);
    while (new Date() - startTime < ms);

    console.log("メインスレッドの占有を終了します");
}

setTimeout(() => {
    sleep(5000);
}, 3000);

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    console.log('button clicked');
});