const images= document.querySelectorAll("[data-src]")

function preloadImage(img){
const src = img.getAttribute("data-src");
if(!src){
    return;
}
}


const imgOptions = {
    threshold:0,  
    rootMargin: "0px 0px -100px 0px"
};

const imgObserver = new IntersectionObserver((entries,imgObserver) => {
entries.forEach(entry => {
    if (!FileSystemEntry.isIntersecting) {
    return;
} else {
    preloadImage(entry.target);
    imgObserver.unobserve(entry.target);
}
});

images.forEach(image => {
    imgObserver.observe(image);
})

}, imgOptions);