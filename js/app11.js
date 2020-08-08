function tranNav(){
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");
    
    sections.forEach(sec=>{

        sec.addEventListener("mouseenter",function(){
           const id = this.getAttribute("id");
           const navActive = document.querySelector(`a[href="#${id}"]`);

           navLinks.forEach(link=>{
            link.addEventListener("mouseenter",function(){
                
                const beClass = this.className;

                if(beClass != "active"){
                    navActive.classList.remove("active");
                    beClass.classList.add("active");
                }
            });
        });

        navLinks.forEach(clean => clean.classList.remove("active"));
        navActive.classList.add("active");
           
           
        });
    });
           

       
       
    
    
}

const navSlide = () => {
    const burger = document.querySelector(".ham");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
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
    closeNav.addEventListener('click', () =>{
        nav.classList.remove('nav-active');
        body.classList.remove('noscroll');
        toppin.classList.remove('opacity');
        main.classList.remove('opacity');
        navLinks.forEach((links, index) =>{
            links.style.animation = ``;
        });
    });
}

const app = () =>{
    tranNav();
    navSlide();
}

app();
