let eded1=parseInt(prompt("Birinci ədədinizi daxil edin"))
let emel=prompt("Riyazi əməlinizi daxil edin (məs. +, -, *, /")
let eded2=parseInt(prompt("İkinci ədədinizi daxil edin"))
function kalk(eded1,eded2,emel){
    switch (emel){
        case '+': 
        return eded1+eded2
        break;
        case '-': 
        return eded1-eded2
        break;
        case '*': 
        return eded1*eded2
        break;
        case '/': 
        return eded1/eded2
        break;
    }
}
alert(kalk(eded1,eded2,emel));