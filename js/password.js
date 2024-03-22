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

    // javascript:!function(){const userName = document.getElementsByTagName('input')[0];const password = document.getElementsByTagName('input')[1];const yourName = 'testHisamatsu';const yourPass = 'h1samatsuKE7IxI';userName.value = yourName;password.value = yourPass;}();

    javascript:!function(){const userName = document.getElementsByTagName('input')[0];const password = document.getElementsByTagName('input')[1];const yourName = 'student+ippan@iret.co.jp';const yourPass = 'Abc12356';userName.value = yourName;password.value = yourPass;}();

    javascript:!function(){let str_pw='Abc12356';let ele_pw=document.forms['loginForm'].elements['pw'];ele_pw.value=str_pw;ele_pw.type='text';}();

    const pw = document.forms['']
}

inputData();