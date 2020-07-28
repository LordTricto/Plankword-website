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

tranNav();