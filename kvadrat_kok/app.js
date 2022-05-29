let eded=parseInt(prompt("Kvadrat kök almaq istədiyinin ədədi daxil edin"))
if (eded>=0){
    alert(`${eded} -in Kvadrat kökü ${Math.pow(eded,1/2)}`)
}
else if(eded<0){
    alert("Mənfi ədəddən kvadrat kök ALMAQ MÜMÜKEN DEYİL!")
}
else{
    alert("Xəta!")
}