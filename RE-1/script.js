gsap.to(".box",{
    x: 1000,
    duration: 2,
    delay: 1,
    backgroundColor: "blue",
})

gsap.from(".txt",{
    y: 500,
    opacity: 0,
    duration: 3,
})


var tl = gsap.timeline();

tl.from(".nav",{
    y: -100,
    duration: 1,
    delay: 1,

})

tl.from("h1",{
    y: -50,
    duration: 0.4,
    stagger: 0.3
})
