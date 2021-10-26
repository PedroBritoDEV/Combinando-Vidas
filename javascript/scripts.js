document.getElementById('menu-btn').addEventListener('click',() =>{
    document.querySelector('.nav-links').classList.toggle('active')
});


window.addEventListener("scroll", () => {

    document.querySelectorAll('.left').forEach((animation, index) => {
        if(animation.getBoundingClientRect().top < window.innerHeight -50) {
            animation.classList.add('scroll')
        }
    })

    document.querySelectorAll('.right').forEach((animation, index) => {
        if(animation.getBoundingClientRect().top < window.innerHeight -50) {
            animation.classList.add('scroll')
        }
    })

})
