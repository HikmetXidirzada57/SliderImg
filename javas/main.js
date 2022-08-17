// var btn=document.querySelectorAll(".box1 button")
// var text1=document.querySelector(".txt1")
// var text2=document.querySelector(".txt2")
// var text3=document.querySelector(".txt3")

// btn.onclick=function(){
//  for (let i = 0; i < btn.length; i++) {
//      for (let d = 0; d < txt1.length; d++) {
         
//         this.nextElementSibling.add("active")
//      }
   
    

     
//  }

// }
const leftimgs=document.querySelectorAll(".carouselItem img")
const rightImg=document.querySelector(".carousel-img img")
for( let img of leftimgs){
    img.onclick=function(){
       let imgSrc=this.src
       rightImg.src=img.src
    }
}
