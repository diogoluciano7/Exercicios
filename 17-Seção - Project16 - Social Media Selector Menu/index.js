const menuEl = document.querySelector(".menu");
const socialListEl = document.querySelector(".social-lists");
const liEls = document.querySelectorAll(".social-lists li"); 
const menuTextEl = document.querySelector(".menu p");

menuEl.addEventListener("click", () =>{
   socialListEl.classList.toggle("hide"); 
   menuEl.classList.toggle("rotate");
});

liEls.forEach((liEl) =>{
    liEl.addEventListener("click", ()=>{
        menuTextEl.innerHTML = liEl.innerHTML;
        socialListEl.classList.add("hide");
        menuEl.classList.toggle("rotate");
    });
});