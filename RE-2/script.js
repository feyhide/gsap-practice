
gsap.from("#page1 .box",{
    scale:0,
    delay:1,
    duration:1,
    rotate:360
})

gsap.from("#page2 .box",{
    duration:1,
    x:-500,
    opacity:0,
    stagger:0.2,

    //scrollTrigger: ".page2 .box"
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller:"body",
        start: "top 50%",
        end: "top 10%",
        //markers:true,
        scrub:2,
    }
})

gsap.to("#page3 h1",{
    transform: "translateX(-100%)",
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        //markers:true,
        start:"top 0%",
        end:"top -150%",
        scrub:2,
        pin:true,

    }
})

