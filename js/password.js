function inputData() {
    console.log('hello');
    // const userName = document.getElementById('account_id');
    const userName = document.getElementsByTagName('input')[0];
    const password = document.getElementsByTagName('input')[1];

    const yourName = 'testHisamatsu';
    const yourPass = 'h1samatsuKE7IxI';
    // console.log(userName);
    // console.log(password);

    userName.value = yourName;
    password.value = yourPass;

    javascript:!function(){const userName = document.getElementsByTagName('input')[0];const password = document.getElementsByTagName('input')[1];const yourName = 'testHisamatsu';const yourPass = 'h1samatsuKE7IxI';userName.value = yourName;password.value = yourPass;}();
}

inputData();