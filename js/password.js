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

    // javascript:!function(){console.log('start');const notifiedUsers = document.getElementsByName('jlplne');const notifiedUserIds = 'DC_増田';notifiedUsers.value = notifiedUserIds;console.log(notifiedUsers);}();
    // javascript:!function(){console.log('start');const notifiedUsers = document.getElementsByName('select2-choices')[0];console.log(notifiedUsers);}();
    // javascript:!function(){console.log('start');const notifiedUsers = document.getElementsByName('hevly8');const notifiedUserIds = 'DC_増田';notifiedUsers.value = notifiedUserIds;console.log(notifiedUsers);}();
    javascript:!function(){console.log('start');const notifiedUsers = document.getElementsByClassName('select2-choices')[0];const notifiedUserIds = '<li class="select2-search-choice">    <div><img class="select2-icon" src="/NulabAccountIcon.action?userId=1041622&amp;name=large" alt="User Icon"><span class="select2-icon-text">DC_増田</span></div>    <a href="#" class="select2-search-choice-close" tabindex="-1"></a></li>';notifiedUsers.insertAdjacentHTML('afterbegin', notifiedUserIds);console.log(notifiedUsers);}();

//     @エドテク樋口（武） 
// 樋口さん、お疲れ様です。
// PHPバージョンアップテスト中に、下記のバグを確認いたしましたので、ご確認お願いいたします。

// ■概要
// 学校管理者一括印刷画面の利用延長書印刷ボタンを印刷対象を未選択で押すと500エラーとなる。
// #image(利用延長書印刷.png)

// 現行開発環境では下記画像のように正しく表示されます。
// #image(利用延長書（正しい挙動）.png)

// ■再現手順
// 1[[【現行PHP8開発環境】 運営管理システム:https://dev-php8-moshinavi.daxe.co.jp/zigs_admin]] にログイン
// 　ID：testHisamatsu
// 　パスワード：h1samatsuKE7IxI
// 2  学校管理者 > 学校管理者一括印刷 > 利用延長書印刷
//  ''※利用延長書印刷ボタンは印刷対象を未選択で押してください'' 

// ■その他
// 関連するバックログ：https://edutec.backlog.com/view/KJ_TESD2C-2458
// テストID：6-019-01, 6-019-02

// ご確認よろしくお願いいたします。
}

inputData();