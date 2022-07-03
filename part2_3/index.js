'use strict';
/*====================변수지정하고 함수만들어서 실행=============================*/
// //버튼클릭 함수
// const onClickButton = () => {
//     console.log('버튼 클릭!');
// };

// //변수로 지정해서 이벤트리스너함수
// const $button = document.querySelector('button');
// $button.addEventListener('click', onClickButton);


/*====================변수없이 바로 실행할수있는 이벤트 리스너 함수=============================*/
document.querySelector('button').addEventListener('click', () => {
    console.log('버튼클릭!');
});

