'use strict';
// const number = prompt('몇 명이 참가하나?');
// console.log(typeof number);//prompt는 문자열 그래서 숫자형으로 변환해야됨

// const realNumber = Number(number);
// console.log(typeof realNumber);

const number = Number(prompt('몇 명이 참가하나요?'));
console.log(typeof number);



const onClickButton = () =>{
    console.log('버튼 클릭');
};

//이벤트가 발생할 때 실행할 함수를 생성
const $button = document.querySelector('button');
$button.addEventListener('click',onClickButton); //addEventListener('이벤트이름', 리스너 함수)
//버튼을 클릭하면 onclickButton 함수가 실행
//여기서 onClickButton 같은 함수를 콜백함수라고 한다. (콜백함수란 작업이 실행되고 난 뒤 추가로 실행되는 함수를 의미)

const onInput =(event)=>{
    console.log('글자입력', event.target.value);
};
const $input = document.querySelector('input');
$input.addEventListener('input', onInput);



