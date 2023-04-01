const countValue=document.getElementById('counter');
let value = parseInt(countValue.innerHTML);
const increment=()=>{
value=value+1;
    countValue.innerHTML=value;

}

const decrement=()=>{
    value = value-1;
    countValue.innerHTML=value;
    

}

