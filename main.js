//1.soru
let users =[
    {name:"ismail",age:24},
    {name:"eslem",age:18},
    {name:"ethem",age:13},
    {name:"gamze",age:38},
    {name:"ahmet",age:23},
    {name:"enes",age:24}
];

//2.soru
let li= document.getElementById("username")
let ikincili= document.getElementById("username2")
let ucunculi= document.getElementById("username3")
users.forEach(function(veri,index){
li.innerHTML += `<li>${veri.name}</li>`
})

//3.soru
users.find(function(veri,index){
    if(veri.name=="ismail"){
        ikincili.innerHTML += `<li>${veri.name}</li>`
        }
})

//4.soru
users.filter(function(veri,index){
    if(veri.age>=18){
        ucunculi.innerHTML += `<li>${veri.name}</li>`
    }
})

//5.soru
let objeomer= {name:"ömer",age:24}
users.find(function(veri,index){
    if(veri.name != "ömer"){
        users.push(objeomer)
        console.log(users)
        return users
        
    }
   
   
    
    
})

//6.soru
function carpim(sayi1,sayi2){
    return sayi1*sayi2
}
 alert(carpim(3,5))

//7.soru

let ismi= prompt("isminiz nedir?")
let yasi= Number(prompt("yasinizi giriniz?"))
let li1 = document.getElementById("yaslari")
let li2 = document.getElementById("adin")



if(ismi && yasi ){
  li2.innerHTML = `Senin Adın: ${ismi}, Yaşınız:`
  li1.innerHTML = `${yasi}`
  
}
else{
    alert("boş bıraktınız")
}
if(yasi<18){
document.getElementById("yaslari").style.color = "red"
}

