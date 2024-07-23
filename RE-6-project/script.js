var tl = gsap.timeline()


tl.from("nav h1,.part2 h4,.part2 button",{
    y:-40,
    opacity:0,
    delay:0.5,
    duration:0.5,
    stagger:0.2
})



tl.from(".centerpart1 h1,.centerpart1 h3,.centerpart1 button",{
    x:-40,
    opacity:0,
    duration:0.5,
    stagger:0.2
})

tl.from(".centerpart2 img,.centerpart2",{
    opacity:0,
    duration:0.5,
},"-=1")

tl.from(".sectionbottom h1",{
    y:10,
    opacity:0,
    duration: 1,
    stagger:0.2,
})


var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".sec2",
        scroller:"body",
        markers:true,
        start:"top 50%",
        end:"top 0%",
        scrub:2,

    }
})

tl2.from(".services",{
    x:-300,
    opacity:0
})

tl2.from(".elem.right",{
    x:400,
    duration:0.4,
    opacity:0,
},"saath")


tl2.from(".elem.left",{
    x:-400,
    duration:0.4,
    opacity:0,
},"saath")