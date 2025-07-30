
function Zakaz(){
let set = prompt("Qiyqiriq set nechta zakaz qilmoqchisiz")

let tasdiqlash = confirm(`
Siz ${set} ta qiqiriq set tanladingiz
Jami: ${set * 45000} som boldi
Zakazni qabul qilaymi?`)
        
switch(tasdiqlash){
 case true:
 alert("Zakaz qabul qilindi")
 break;
 case false:
 alert("Zakaz bekor qilindi")
 break;
    }  
}