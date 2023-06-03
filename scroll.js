

//Присваиваю событие плавной прокрутки
(function (...element){

    element= element.map(v=>document.getElementById(v))

   let menuArr= document.querySelectorAll(".menu")

 element.forEach((v,i)=>{
    menuArr[i].addEventListener("click", ()=>{
        
        v.scrollIntoView({ behavior: "smooth", block:"end"});

} 
        )})
 

    })("home","about","features","contact")