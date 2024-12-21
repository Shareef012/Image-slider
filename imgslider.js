let flag=0
function container(x){
    flag = flag + x;
    slideshow(flag);
}
slideshow(flag);
function slideshow(num){
    let slides = document.getElementsByClassName("slide")
    if(num===slides.length)
    {
        num = 0;
        flag = 0;
    }
    else if(num<0){
        num = slides.length-1;
        flag = slides.length-1;
    }
    for(let i=0;i<slides.length;i++){
        slides[i].style.display = "none";
    }
    slides[num].style.display="block";
    console.log(slides)
}