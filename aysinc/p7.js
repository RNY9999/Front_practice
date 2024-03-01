// マクロタスクとマイクロタスク
// Async Await
// Promiseをさらに直感的に記述できるようにしたもの

// AsyncはPromiseを返す
// Await Promiseを返却する関数の非同期処理が完了するまで待つ

function sleep(val) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(val++);
            resolve(val);
        }, 1000);
    });
}

async function init() {
    let val = await sleep(0);
    val = await sleep(val);
    val = await sleep(val);
    val = await sleep(val);
    
    throw new Error();
}

init().then((val) => {
    console.log('hello' + val);
}).catch((e) => {
    console.log(`ERROR: ${typeof e}`);
    e.name = "馬鹿が起こすerror"
    e.message = "error起こしちゃったねｗｗｗｗｗｗ";
    console.error(e);
});