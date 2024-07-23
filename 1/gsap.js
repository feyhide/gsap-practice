// gsap.to(".box",{
//     opacity: 1,
//     x: 20,
//     y: 20,
//     duration: 0.6,
// })
// gsap.to(".box2",{
//     opacity: 1,
//     y: 50,
//     duration:0.4,
//     delay: 0.1
// })
var tl = gsap.timeline(); 

tl.to("#p1",{
        opacity: 1,
        y: 50,
        duration:0.4,
        //delay: 0.1,
        stagger: 1//onebyone
})
tl.from(".box3",{
    opacity: 0,
    y: -20,
    duration:0.4,
    // timeline khud hi delay kardega delay: 0.5
})

tl.from("#page2",{
    opacity:0,
    y: -20,
    duration: 0.5,
    stagger: 0.5,
    scrollTrigger: {
        
    }

})