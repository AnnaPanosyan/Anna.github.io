function random(min, max){
    return (Math.floor (Math.random() * (max - min)))
}
function rgb(){
  let arr=[]
  for(let i = 0; arr.length < 3;i++){
    arr[i]=random(100,255)
  }
  return  'rgb'+'('+arr.toString()+')'
}
 let person=document.querySelector('.person')
  

person.addEventListener("mouseover", function( event ){
  
  event.target.style.color =rgb()

})