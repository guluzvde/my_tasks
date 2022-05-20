
let km=prompt("Mil'ə çevirmək istədiyiniz KM");
let miles;
miles=km*0.6214;
if(km<0){
    alert("Daxil edilən km 0-dan kiçik ola bilməz!");
}
else if(km==null || km==""){
    alert("KM daxil edilməyib!");

}
else{
    alert(km + " km = " + miles +" miles")
}
