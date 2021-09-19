let carouselItem = document.querySelector(".pic");
let carouselButton = document.querySelectorAll(".carousel-actions");
let numImg=document.querySelectorAll("img").length;
let indexImg=1;
let translateX=0;
carouselButton.forEach(button =>{
    button.addEventListener('click', event =>{
        if(event.target.id ==='prev'){
         if(indexImg !==1){
            indexImg--;
            translateX+=640;
         }

        }else{
            if(indexImg!==numImg){
                indexImg++;
                translateX-=640;

            }
        }
      carouselItem.style.transform=`translateX(${translateX}px)`;
    });
});


