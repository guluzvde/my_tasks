let eded=parseInt(prompt("Ədədinizi daxil edin"))
if(eded==0 ||eded==1){
    alert(`${eded}! = ${eded}`)
}
else if(eded>0){
    let fact=1
    for(let i=1; i<=eded;i++){
        fact*=i;
    }
    alert(`${eded}! = ${fact}`);
}