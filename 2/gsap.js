const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

var tl = gsap.timeline();

gsap.to(".hello,.name",{
    y: 10,
    opacity: 1,
    stagger: 0.5,
    duration: 0.7,
})
gsap.to(".div2",{
    y: -1000,
    delay: 2,
    duration: 0.7,
})

gsap.from("body",{
    overflow: "hidden",
    delay: 2.5,
})
gsap.from(".div2",{
    delay:2,
    duration: 0.7,
    backgroundColor: "black"
})
gsap.to(".txt2",{
    y: 20,
    delay: 2.5,
    opacity: 1,
    duration: 1,
})
gsap.to(".set",{
    y: -20,
    opacity: 1,
    delay:2.5,
    duration: 2,
})
gsap.to(".about",{
    transform:"translateX(-85%)",
    scrollTrigger:{
        scrub:2,
        scroller:"body",
        trigger:"body",
        pin: true,
        start: "top 0",
        end:"top -200%",
    }
})

gsap.to(".div3",{
    duration: 0.7,
    opacity:1,
    scrollTrigger:{
        scrub:1,
        scroller:"body",
        markers:true,
        trigger:".div2",
        start:"0% 0%",
        end:"50% 50%",
    }
})