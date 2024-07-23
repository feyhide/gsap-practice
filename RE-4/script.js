var main = document.querySelector(".main")
var cursor = document.querySelector(".cursor")
var menu = document.querySelector(".nav i")
var menufull = document.querySelector(".full i")

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x: dets.x,
        y: dets.y,
        ease:"back.out"
    })
})

var tl = gsap.timeline()

tl.to(".full",{
    right: 0,
    duration: 0.6
})


tl.from(".full h4",{
    x: 100,
    stagger: 0.3,
    opacity: 0,
    duration: 0.4,
})

tl.from(".full i",{
    opacity: 0,
})

tl.pause()

menu.addEventListener("click",function(){
    tl.play();
})

menufull.addEventListener("click",function(){
    tl.reverse();
})