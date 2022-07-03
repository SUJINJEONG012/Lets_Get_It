'use strict';

//버튼클릭 함수
const onClickButton = () => {
    console.log('버튼 클릭!');
};

//변수로 지정해서 이벤트리스너함수
const $button = document.querySelector('button');
$button.addEventListener('click', onClickButton);

// document.querySelector('button').addEventListener('click', () => {
//     console.log('버튼클릭!');
// });

