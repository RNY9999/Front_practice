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

    // javascript:!function(){const userName = document.getElementsByTagName('input')[0];const password = document.getElementsByTagName('input')[1];const yourName = 'student+ippan@iret.co.jp';const yourPass = 'Abc12356';userName.value = yourName;password.value = yourPass;}();

    // javascript:!function(){const userName = document.getElementsByTagName('input')[1];const school = document.getElementsByTagName('input')[0];const password = document.getElementsByTagName('input')[2];const yourName = 'csv00001';const schoolCode = '04150';const yourPass = 'gdFS1GCi';userName.value = yourName;school.value = schoolCode;password.value = yourPass;}();

    // javascript:!function(){console.log('start');const notifiedUsers = document.getElementsByName('notifiedUserIds');const notifiedUserIds = 'エドテク小山（正）';notifiedUsers.value = notifiedUserIds;console.log(notifiedUsers);}();
    javascript:!function(){console.log('start');const notifiedUsers = document.getElementsByClassName('select2-choices')[0];const notifiedUserIds = '<li class="select2-search-choice">    <div><img class="select2-icon" src="/NulabAccountIcon.action?userId=1041622&amp;name=large" alt="User Icon"><span class="select2-icon-text">DC_増田</span></div>    <a href="#" class="select2-search-choice-close" tabindex="-1"></a></li>';notifiedUsers.insertAdjacentHTML('afterbegin', notifiedUserIds);console.log(notifiedUsers);}();
}

inputData();