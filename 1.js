let num1 = 0;
let num2 = 0;

let res = 0;
let sign = '';
let flag1;
let flag2;

function num(n){
    if(num1 === 0 && num2 === 0 && sign === '' && flag1 !== -1)
        document.getElementById('out').innerHTML = '';
    if (sign === ''){
        num1 = parseInt(num1)*10+parseInt(n);
        document.getElementById('out').innerHTML = document.getElementById('out').innerHTML + num1%10;
    }else{
        num2 = parseInt(num2)*10+parseInt(n);
        document.getElementById('out').innerHTML = document.getElementById('out').innerHTML + num2%10;
    }


}

function plus(){
    sign = '+';
    document.getElementById('out').innerHTML = document.getElementById('out').innerHTML + "+";
}
function minus(){
    if(num1 !== 0 && num2 === 0 && sign !== ''){
        flag2 = -1;
        document.getElementById('out').innerHTML = document.getElementById('out').innerHTML + "(-";
    }else
        if(num1 === 0 && num2 === 0 && sign === ''){
            flag1 = -1;
            document.getElementById('out').innerHTML = '-';

    } else{
            sign = '-';
            document.getElementById('out').innerHTML = document.getElementById('out').innerHTML + "-";
        }

}
function mult(){
    sign = '*';
    document.getElementById('out').innerHTML = document.getElementById('out').innerHTML + "*";
}
function div(){
    sign = '/';
    document.getElementById('out').innerHTML = document.getElementById('out').innerHTML + "/";
}
function isEqual(){
    if(flag1 !== -1)
        flag1 = 1;
    if(flag2 !== -1)
        flag2 = 1;

    if(sign === '+')
        res = flag1*num1+flag2*num2;
    if(sign === '-')
        res = flag1*num1-flag2*num2;
    if(sign === '*')
        res = (flag1*num1)*(flag2*num2);
    if(sign === '/') {
        if (num2 !== 0) {
            res = (flag1*num1)/(flag2*num2);
        } else res = "error";
    }

    num1 = 0;
    num2 = 0;
    sign = '';
    flag1 = 1;
    flag2 = 1;
    document.getElementById('out').innerHTML = res;
    res = 0;
}
function clear(){
    res = 0;
    num1 = 0;
    num2 = 0;
    sign = '';
    document.getElementById('out').innerHTML = '';

}

