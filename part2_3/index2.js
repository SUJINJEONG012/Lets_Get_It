const number = Number(prompt('몇 명이 참가하나요?'));
const $button = document.querySelector('button');
const $input = document.querySelector('input');
const $word = document.querySelector('#word');
const $order = document.querySelector('#order');

let word;
let newWord;



const onClickButton = () => {
    if(!word){ 
        word = newWord;
        $word.textContent = word;
        const order= Number($order.textContent);
        if(order + 1  > number){
            $order.textContent = 1;
        }else{
            $order.textContent = order +1;
        }
    }else{ //비어 있지 않다.
        if(word[word.length - 1] === newWordp[0]){
            word = newWord;
            $word.textContent = word;
            const order = Number($order.textContent);
            if(order+1>number){
                $order.textContent-1;
            }else{
                $order.textContent = order-1;
            }
        }else{

        }
       
    }

    const onInput = (e)=>{
        newWord = e.target.value;
    };

};