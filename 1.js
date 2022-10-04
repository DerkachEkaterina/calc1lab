let num1 = 0;
let num2 = 0;
let finish = false;
let res = 0;
let sign = '';
function num(n){
    if (sign == ''){
        num1 = parseInt(num1)*10+parseInt(n);
        document.getElementById('out').innerHTML = num1;
    }

     else{
        num2 = parseInt(num2)*10+parseInt(n);
        document.getElementById('out').innerHTML = num2;
    }


}

function plus(){
    sign = '+';
}
function minus(){
    sign = '-';
}
function mult(){
    sign = '*';
}
function div(){
    sign = '/';
}

function clear(){
    res = 0;
    num1 = 0;
    num2 = 0;
    sign = '';
    document.getElementById('out').innerHTML = 0;

}

function isEqual(){
    if(sign === '+')
        res = num1+num2;
    if(sign === '-')
        res = num1-num2;
    if(sign === '*')
        res = num1*num2;
    if(sign === '/')
        if(num2 !== 0){
            res = num1/num2;
        } else
            res = 0;

    num1 = 0;
    num2 = 0;
    document.getElementById('out').innerHTML = res;
    res = 0;
}