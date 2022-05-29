let age= prompt("Yaşınızı daxil edin")
let typeNum = parseInt(age)
if(age>=18){
    alert("Sizin sürücülük hüququnuz var")
}

else if(typeNum>0 && typeNum<18){
    alert(`Sizin ${typeNum} yaşınız olduğu üçün SÜRÜCÜLÜK HÜQUQUNUZ YOXDUR!`)
}
else if(typeNum<0){
    alert("Düzgün olmayan məlumat! (YAŞINIZ '0'-dan kiçik ola bilməz!)")
}
else if(typeNum===0){
    alert("Düzgün olmayan məlumat! (YAŞINIZ '0'-a bərabər ola bilməz!)")
}
else if(age=="" || age==null){
    alert("Heç bir məlumat daxil edilməyib!")
}