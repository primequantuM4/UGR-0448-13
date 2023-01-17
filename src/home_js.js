let index = 1;
showSlides(index);
function traverse(n){
    showSlides(index += n)
}
function showSlides(n){
    let slides = document.getElementsByClassName("albumLike__slideshow");
    if (n > slides.length) index = 1;
    if (n < 1) index = slides.length;
    for (let i = 0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[index - 1].style.display = "block";
}