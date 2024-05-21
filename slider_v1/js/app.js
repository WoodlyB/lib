document.addEventListener('DOMContentLoaded', function() {
// Select the arrow btn 
let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev"); 

// Select element inside the Carousel 
let carourelDom = document.querySelector(".carousel") ;

let listItemDom = document.querySelector(" .carousel .list")
let thumbnailDom = document.querySelector(" .carousel .thumbnail")


nextDom.onclick = function(){
    showSlider("next");
}


prevDom.onclick = function(){
    showSlider("prev");
}



let timeRunning =3000 ;
let runTimeOut;

function showSlider(type){
    let itemSlider = document.querySelectorAll(".carousel .list .item ");
    let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item ")

    if (type === "next") {
      
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carourelDom.classList.add("next"); 
    }else{
        console.log("else");
            let positionLastItem = itemSlider.length -1;
            listItemDom.prepend(itemSlider[positionLastItem]);
            thumbnailDom.prepend(itemThumbnail[positionLastItem]);
            carourelDom.classList.add("prev"); 

    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carourelDom.classList.remove("next");
        carourelDom.classList.remove("prev");
    }, timeRunning)
};


});