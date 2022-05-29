let eded=parseInt(prompt("Hansı ədədə qədər bütün ədədlər cəmlənsin"))

if(eded==0){
    alert(`Cavab: 0`)
}
else if(eded<0){
    alert("Natural ədədlər SIFIRDAN KİÇİK OLA BİLMƏZ!")
}
else if(eded>0){
    let cem=0;
    for( let i=1;i<=eded;i++){
        cem+=i;

    }


    alert(`${eded}-ə qədər olan ədədlərin cəmi ${cem}-ə bərabərdir`)
}
