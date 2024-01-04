import '../css/tailwind-build.css';
import '../scss/main.scss';



document.addEventListener('DOMContentLoaded' , function () {

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
        duration: 1.2,
    });

    lenis.on('scroll', (e) => {
        console.log(e)
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

})

