let eded=parseInt(prompt("Ədədinizi daxil edin"))
let sadeEded=true;
if(eded===1){
    alert("1 nə sadə nə də mürəkkəb ədəd deyil!")
}
else if(eded>1){
    for(let i=2; i<eded; i++){
        if(eded%i==0){
            sadeEded=false;
            break;
        }
    }
    if(sadeEded){
        alert(`${eded} Sadə ədəddir`)
    }
    else{
        alert(`${eded} Mürəkkəb ədəddir`)
    }
}