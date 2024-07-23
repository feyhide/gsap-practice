

function kkkk() {
    
    var h1 = document.querySelector("h1")

    var text = document.querySelector("h1").textContent.split("")

    var clutter = ""
    text.forEach(function(e){
        clutter += `<span>${e}</span>`
    })

    h1.innerHTML = clutter
}

kkkk()

gsap.from("h1 span",{
    y: 10,
    duration: 0.2,
    opacity:0,
    stagger:0.1
})