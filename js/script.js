function random(min, max){
    return (Math.floor (Math.random() * (max - min)))
}
 let mouse=document.querySelector('.person').addEventListener('mouseleave', leaving);
function leaving(ev){
  return ev.style.color = rgb(random(100,255), random(100,255), random(100,255))
}


//.style.color = rgb(f(100,255), f(100,255), f(100,255))