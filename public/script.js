













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
    console.log(entries);
    console.log(entries.isIntersecting);
    console.log(entries[0].isIntersecting);

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
    /* rootMargin: '0px 0px -200px 0px' */
    rootMargin: '0px',
    threshold: [.2, .9]
} 

const observer = new window.IntersectionObserver(handler, options);
observer.observe(home);
observer.observe(skills);
observer.observe(projects);
observer.observe(redes); 














/* 
let observer = new IntersectionObserver(function(entries,observer){

    entries.forEach(entry => {
        

        console.log(entry);
        if (entry.isIntersecting) {
          intersectionHandler(entry); 
        }


      });



}, {rootMargin: '-50px 0px -55%',
threshold: 0.2});



observer.observe(section1);



function intersectionHandler(entry) {
    const id = entry.target.id;
    console.log(id);
  } */















/* const sections = document.querySelectorAll('div.screen');
const config = {
  rootMargin: '-50px 0px -55%'
};

let observer = new IntersectionObserver(function (entries, self) {
  entries.forEach(entry => {
    console.log(entry);
    if (entry.isIntersecting) {
      intersectionHandler(entry); 
    }
  });
}, config);

sections.forEach(section => {
  observer.observe(section);
});

function intersectionHandler(entry) {
  const id = entry.target.id;
  const currentlyActive = document.querySelector('nav li.active');
  const shouldBeActive = document.querySelector('nav li[data-ref=' + id + ']');

  if (currentlyActive) {
    currentlyActive.classList.remove('active');
  }
  if (shouldBeActive) {
    shouldBeActive.classList.add('active');
  }
} */