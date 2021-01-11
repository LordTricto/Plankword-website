const imgs = document.getElementById("imgs");
const img = document.querySelectorAll("#imgs img");

    
const a= img.length;
let idx = 0;

   
function run(){

    idx++;

    if (idx >= a){
        
        idx = 0;
        
    }
        
    imgs.style.transform = `translateX(${-idx * 65}vw)`; 
    
        
}


// function parallax(element, distance, speed){
//     const item = document.querySelector(element);

//     item.style.transform = `translateY(${distance * speed}px)`;

// }
// window.addEventListener("scroll", function(){

//     parallax("#home", window.scrollY, 0.5);
// })

// function tranNav(){
//     const sections = document.querySelectorAll("section");
//     const navLinks = document.querySelectorAll("nav a");
//     const a = document.getElementById("contact");
    
//     sections.forEach(sec=>{
//         sec.addEventListener("mouseenter",function(){
           
            
            
//            const id = this.getAttribute("id");
//            const navActive = document.querySelector(`a[href="#${id}"]`);
//            if (id!="contact") {
//             navLinks.forEach(link=>{
//                 link.addEventListener("mouseenter",function(){
                    
//                     const beClass = this.className;
    
//                     if(beClass != "active"){
//                         navActive.classList.remove("active");
//                         beClass.classList.add("active");
//                     }
//                 });
//             });
//             navLinks.forEach(clean => clean.classList.remove("active"));
//             navActive.classList.add("active"); 
//            }

//         });
//     });
// }


// function colorNav(){

//     const section = document.querySelectorAll("section");
//     const navLink = document.querySelectorAll("nav a");

//     section.forEach(sect=>{
//         sect.addEventListener("mouseenter",function(){
//             const secName = this.getAttribute("id");
//                 navLink.forEach(link =>{
 
//                     if (secName == "home"){
//                         link.classList.remove('navColor');
//                     }
//                     else{
//                         link.classList.add('navColor');
//                     }
//                 });

//         });

//     });
// }


const navSlide = () => {
    const burger = document.querySelector(".ham");
    const nav = document.querySelector(".nav-linkss");
    const navLinks = document.querySelectorAll(".nav-linkss li");
    const closeNav = document.querySelector(".close-nav");
    const toppin = document.querySelector(".toppin");
    const main = document.querySelector("main");
    const body = document.querySelector("body");

    burger.addEventListener('click', () =>{
         
        nav.classList.add('nav-active');
        body.classList.add('noscroll');
        toppin.classList.add('opacity');
        main.classList.add('opacity');
  
        navLinks.forEach((links, index) =>{
            links.style.animation = `navLinkFades 2s ease forwards ${index / 7 + 0.3 }s`;  
            
        });   
    });


    
        navLinks.forEach((links, index) =>{
            links.addEventListener('click', () =>{
                navLinks.forEach((links, index) =>{
                    links.style.animation = `navLinkFadesOut 1.5s ease both ${index / 7 + 0.3 }s`;  
                });
                setTimeout(function(){
                nav.classList.remove('nav-active');
                body.classList.remove('noscroll');
                toppin.classList.remove('opacity');
                main.classList.remove('opacity');
            }, (0 + (index / 3))* 1000  );
            });
        });


}


function animate(){
    
    const title = document.querySelector(".services-section-title");
    const content2 = document.querySelector(".service-content2");
    const pictutre1 = document.querySelector(".firstImg");
    const pictutre2 = document.querySelector(".secondImg");
    const pictutre3 = document.querySelector(".thirdImg");
    const secTitle = document.querySelectorAll("#services .section-title-border");
    const title2 = document.querySelector(".aboutus-section-title");
    const secTitle2 = document.querySelectorAll("#about .section-title-border");
    const title3 = document.querySelector(".aboutus-Write");
    const content3 = document.querySelector(".aboutus-content1");
    const content4 = document.querySelector(".aboutus-content2");
    const content5 = document.querySelector(".aboutus-content3");
    const content6 = document.querySelector(".aboutus-content4");
    const secTitle3 = document.querySelectorAll(".section-box3 .aboutus-content-title-border");
    // const content7 = document.querySelector(".wer");
    // const content8 = document.querySelector(".wer2");
    // const content9 = document.querySelector(".wer3");
    const content10 = document.querySelector(".carousel");
    // const secTitle4 = document.querySelector("#home");
    // const secTitle5 = document.querySelector("#services");
    
    // SERVICE SECTION

    const controller = new ScrollMagic.Controller();
    const textAnim = TweenMax.fromTo(title,2, {y: "30", opacity: 0}, {y:0, opacity:1, ease: Power2.easeInOut });
    const scene = new ScrollMagic.Scene({
        duration:0,
        triggerElement: title,
        triggerHook:350
    })
    .setTween(textAnim)
    .addTo(controller);

    const cont = TweenMax.fromTo(content2,2, {y: "30", opacity: 0}, {y:0, opacity:1, ease: Power2.easeInOut });
    const scene2 = new ScrollMagic.Scene({
        duration:0,
        triggerElement: content2,
        triggerHook:350
    })
    .setTween(cont)
    .addTo(controller);

    const secTit = TweenMax.fromTo(secTitle,2, {x: "30", y:"30", opacity: 0}, {x:0, y:"0", opacity:1, ease: Power2.easeInOut });
    const scene3 = new ScrollMagic.Scene({
        duration:0,
        triggerElement: secTitle,
        triggerHook:350
    })
    .setTween(secTit)
    .addTo(controller);

    const pic1 = TweenMax.fromTo(pictutre1,4, {y: "90", opacity: 0}, {y:0, opacity:1, ease: Power2.easeInOut });
    const scene4 = new ScrollMagic.Scene({
        duration:0,
        triggerElement: pictutre1,
        triggerHook:350
    })
    .setTween(pic1)
    .addTo(controller);

    const pic2 = TweenMax.fromTo(pictutre2,2, {y: "70", opacity: 0}, {y:0, opacity:1, ease: Power2.easeInOut });
    const scene5 = new ScrollMagic.Scene({
        duration:0,
        triggerElement: pictutre2,
        triggerHook:350
    })
    .setTween(pic2)
    .addTo(controller);

    const pic3 = TweenMax.fromTo(pictutre3,3, {y: "80", opacity: 0}, {y:0, opacity:1, ease: Power2.easeInOut });
    const scene6 = new ScrollMagic.Scene({
        duration:0,
        triggerElement: pictutre3,
        triggerHook:350
    })
    .setTween(pic3)
    .addTo(controller);


    // ABOUT SECTION

    const textAnim2 = TweenMax.fromTo(title2,2, {y: "30", opacity: 0}, {y:0, opacity:1, ease: Power2.easeInOut });
    const scene7 = new ScrollMagic.Scene({
        duration:0,
        triggerElement: title2,
        triggerHook:350
    })
    .setTween(textAnim2)
    .addTo(controller);


    const secTit2 = TweenMax.fromTo(secTitle2,2, {x: "30", y:"30", opacity: 0}, {x:0, y:"0", opacity:1, ease: Power2.easeInOut });
    const scene8 = new ScrollMagic.Scene({
        duration:0,
        triggerElement: secTitle2,
        triggerHook:350
    })
    .setTween(secTit2)
    .addTo(controller);

    const textAnim3 = TweenMax.fromTo(title3,2, {y: "30", opacity: 0}, {y:0, opacity:1, ease: Power2.easeInOut });
    const scene9 = new ScrollMagic.Scene({
        duration:0,
        triggerElement: title3,
        triggerHook:350
    })
    .setTween(textAnim3)
    .addTo(controller);


    const cont2 = TweenMax.fromTo(content3,2, {y: "30", opacity: 0}, {y:0, opacity:1, ease: Power2.easeInOut });
    const scene10 = new ScrollMagic.Scene({
        duration:0,
        triggerElement: content3,
        triggerHook:350
    })
    .setTween(cont2)
    .addTo(controller);

    const cont3 = TweenMax.fromTo(content4,3, {y: "30", opacity: 0}, {y:0, opacity:1, ease: Power2.easeInOut });
    const scene11 = new ScrollMagic.Scene({
        duration:0,
        triggerElement: content4,
        triggerHook:350
    })
    .setTween(cont3)
    .addTo(controller);

    const cont4 = TweenMax.fromTo(content5,3, {y: "30", opacity: 0}, {y:0, opacity:1, ease: Power2.easeInOut });
    const scene12 = new ScrollMagic.Scene({
        duration:0,
        triggerElement: content5,
        triggerHook:350
    })
    .setTween(cont4)
    .addTo(controller);

    const cont5 = TweenMax.fromTo(content6,2, {y: "30", opacity: 0}, {y:0, opacity:1, ease: Power2.easeInOut });
    const scene13 = new ScrollMagic.Scene({
        duration:0,
        triggerElement: content6,
        triggerHook:350
    })
    .setTween(cont5)
    .addTo(controller);

    // const textAnim4 = TweenMax.fromTo(title4,2, {y: "30", opacity: 0}, {y:0, opacity:1, ease: Power2.easeInOut });
    // const scene14 = new ScrollMagic.Scene({
    //     duration:0,
    //     triggerElement: title4,
    //     triggerHook:350
    // })
    // .setTween(textAnim4)
    // .addTo(controller);

    const secTit3 = TweenMax.fromTo(secTitle3,2, {y: "30", opacity: 0}, {y:0, opacity:1, ease: Power2.easeInOut });
    const scene15 = new ScrollMagic.Scene({
        duration:0,
        triggerElement: content6,
        triggerHook:350
    })
    .setTween(secTit3)
    .addTo(controller);

    // const cont6 = TweenMax.fromTo(content7,3, {y: "30", opacity: 0}, {y:0, opacity:1, ease: Power2.easeInOut });
    // const scene16 = new ScrollMagic.Scene({
    //     duration:0,
    //     triggerElement: content7,
    //     triggerHook:350
    // })
    // .setTween(cont6)
    // .addTo(controller);

    // const cont7 = TweenMax.fromTo(content8,2, {y: "30", opacity: 0}, {y:0, opacity:1, ease: Power2.easeInOut });
    // const scene17 = new ScrollMagic.Scene({
    //     duration:0,
    //     triggerElement: content8,
    //     triggerHook:350
    // })
    // .setTween(cont7)
    // .addTo(controller);

    // const cont8 = TweenMax.fromTo(content9,4, {y: "30", opacity: 0}, {y:0, opacity:1, ease: Power2.easeInOut });
    // const scene18 = new ScrollMagic.Scene({
    //     duration:0,
    //     triggerElement: content9,
    //     triggerHook:350
    // })
    // .setTween(cont8)
    // .addTo(controller);

    const cont9 = TweenMax.fromTo(content10,2, {y: "30", opacity: 0}, {y:0, opacity:1, ease: Power2.easeInOut });
    const scene19 = new ScrollMagic.Scene({
        duration:0,
        triggerElement: content10,
        triggerHook:350
    })
    .setTween(cont9)
    .addTo(controller);
    
    // const pinIntroScene1 = new ScrollMagic.Scene({
    //     triggerElement: secTitle5,
    //     triggerHook:0.9
    // })
    // .setPin(secTitle4, {pushFollowers: false})
    // .addTo(controller);

}

const app = () =>{
    // tranNav();
    navSlide();
    // colorNav();
    animate();
    setInterval(run, 7000);
}

app();







