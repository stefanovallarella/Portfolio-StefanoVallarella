// Selecting sections.

let home = document.getElementById("home");
let skills = document.getElementById("skills");
let projects = document.getElementById("projects");
let redes = document.getElementById("redes");

let itemHome = document.getElementById("nav-mobile-home");
let itemSkills = document.getElementById("nav-mobile-skills");
let itemProjects = document.getElementById("nav-mobile-projects");
let itemRedes = document.getElementById("nav-mobile-redes");


itemHome.addEventListener("click", function(){
    itemHome.classList.add("item-mobile-active");
    
    itemSkills.classList.remove("item-mobile-active");
    itemProjects.classList.remove("item-mobile-active");
    itemRedes.classList.remove("item-mobile-active");

    itemHome.classList.add("visited-scroll");

    itemSkills.classList.remove("visited-scroll");
    itemProjects.classList.remove("visited-scroll");
    itemRedes.classList.remove("visited-scroll");

});

itemSkills.addEventListener("click", function(){
    itemSkills.classList.add("item-mobile-active");
    
    itemHome.classList.remove("item-mobile-active");
    itemProjects.classList.remove("item-mobile-active");
    itemRedes.classList.remove("item-mobile-active");

    itemSkills.classList.add("visited-scroll");

    itemHome.classList.remove("item-mobile-active");
    itemProjects.classList.remove("item-mobile-active");
    itemRedes.classList.remove("item-mobile-active");
});

itemProjects.addEventListener("click", function(){
    itemProjects.classList.add("item-mobile-active");
    
    itemSkills.classList.remove("item-mobile-active");
    itemHome.classList.remove("item-mobile-active");
    itemRedes.classList.remove("item-mobile-active");

    itemProjects.classList.add("visited-scroll");

    itemSkills.classList.remove("visited-scroll");
    itemHome.classList.remove("visited-scroll");
    itemRedes.classList.remove("visited-scroll");
});

itemRedes.addEventListener("click", function(){
    itemRedes.classList.add("item-mobile-active");
    
    itemSkills.classList.remove("item-mobile-active");
    itemHome.classList.remove("item-mobile-active");
    itemProjects.classList.remove("item-mobile-active");

    itemRedes.classList.add("visited-scroll");
    
    itemSkills.classList.remove("visited-scroll");
    itemHome.classList.remove("visited-scroll");
    itemProjects.classList.remove("visited-scroll");
});


const visitedClass = 'visited-scroll';
const handler = (entries) => {
if (itemHome) {
    if (entries[0].isIntersecting && entries[0].target == home) {
        itemHome.classList.add(visitedClass);
        itemSkills.classList.remove(visitedClass);
        itemProjects.classList.remove(visitedClass);
        itemRedes.classList.remove(visitedClass);
        }
    }

    if (itemSkills) {
    if (entries[0].isIntersecting && entries[0].target == skills) {
        itemSkills.classList.add(visitedClass);
        itemHome.classList.remove(visitedClass);
        itemProjects.classList.remove(visitedClass);
        itemRedes.classList.remove(visitedClass);
    } 
    }


   if (itemProjects) {
    if (entries[0].isIntersecting && entries[0].target == projects) {
        itemProjects.classList.add(visitedClass);
        itemHome.classList.remove(visitedClass);
        itemSkills.classList.remove(visitedClass);
        itemRedes.classList.remove(visitedClass);
    } 
  }

  if (itemRedes) {
    if (entries[0].isIntersecting && entries[0].target == redes) {
        itemRedes.classList.add(visitedClass);
        itemHome.classList.remove(visitedClass);
        itemSkills.classList.remove(visitedClass);
        itemProjects.classList.remove(visitedClass);
    } 
  } 

}
const options= {
    rootMargin: '0px',
    threshold: [.2, .9]
} 

const observer = new window.IntersectionObserver(handler, options);
observer.observe(home);
observer.observe(skills);
observer.observe(projects);
observer.observe(redes); 


