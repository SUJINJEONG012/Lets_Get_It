'use strict';

const number = Number(prompt('몇 명이 참가하나요?'));
const $button = document.querySelector('button');
const $input = document.querySelector('input');

const $word = document.querySelector('#word');
let word;//제시어
let newWord; //현재 단어


//버튼 함수
const onClickButton = () => {
    //실행코드   

};

//input 
const onInput = (e) => {
    //실행코드 
    newWord = e.target.vaule; //입력하는 단어를 현재 단어로
};


$button.addEventListener('click', onClickButton);
$input.addEventListener('input', onInput);

