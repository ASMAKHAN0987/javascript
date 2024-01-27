let flag = 0;
let slides = document.getElementsByClassName("slide");
function forwardSlide(){
    flag+=1;  
    slideShow();
}
function backwardSlide(){
     flag--;
     slideShow();
 }
slideShow(flag);
function slideShow(){
    for( let y of slides)
        y.style.display = "none";
        if(slides.length == flag){
           flag=0;} 
        else if(flag == -1){
           flag= slides.length-1; }
           slides[flag].style.display = "block";
} 
const  course_container =[...document.querySelectorAll('#container_courses')];
const nxtBtn = [...document.querySelectorAll('.nex')];
const preBtn = [...document.querySelectorAll('.pre')];
course_container.forEach((item,i) => {
    let containerDimension = item.getBoundingClientRect();
    let containerWidth = containerDimension.width; 
    nxtBtn[i].addEventListener('click',()=>{
        item.scrollLeft += containerWidth;
    })
    preBtn[i].addEventListener('click', ()=>{
        item.scrollLeft -= containerWidth;
    })
}); 