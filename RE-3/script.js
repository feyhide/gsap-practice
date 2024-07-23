var path = `M 0 100 Q 250 100 500 100`

var finalpath = `M 0 100 Q 250 100 500 100`

var string = document.querySelector(".string")

string.addEventListener("mousemove",function(dets){
    path = `M 0 100 Q ${dets.x} ${dets.y} 500 100`
    gsap.to("svg path",{
        attr:{d:path},
        duration:0.3,
        ease:"power3.out"
    })
})

string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:finalpath},
        duration:0.3,
        ease:"elastic.out"
    })
})