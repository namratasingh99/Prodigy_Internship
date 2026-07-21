const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if(window.scrollY > 80){
        navbar.classList.add("scrolled");
    }
    else{
      navbar.classList.remove("scrolled");
    }
});

const links = document.querySelectorAll(".nav-links a");

links.forEach((link)=>{
    link.addEventListener("click",function(){
        links.forEach(item=>item.classList.remove("active"));
        this.classList.add("active");
    });
});
