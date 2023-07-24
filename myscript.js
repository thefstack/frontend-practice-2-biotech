gsap.to('#introvideo',{
    width:"100vw",
    scrollTrigger:{
        trigger:".neckHeader",
        scroller:"body",
        start:"top 25%",
        end:"bottom 30vw",
        scrub:true
    }
})

let spotlight=document.querySelectorAll('.spotlightDetails');
spotlight.forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.style.color="rgb(32, 32, 220)";
    });
    element.addEventListener("mouseout", () => {
        element.style.color="";
      });
  });
