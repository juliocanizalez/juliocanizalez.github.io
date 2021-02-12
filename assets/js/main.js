//show menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show');
        })
    }
}

showMenu('nav-toggle', 'nav-menu');

const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    //remove mobile menu
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

//Scroll reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: false
});

//scroll home
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

//scroll about
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

//scroll skills
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

//scroll work
sr.reveal('.work__img',{interval: 200}); 

//scroll contact
sr.reveal('.form__input',{interval: 200}); 

//control 'active' css class
let sections = document.querySelectorAll('section');

function activeClassManagement(){
    let scrollPosition = document.documentElement.scrollTop;

    sections.forEach( section => {
        if(scrollPosition >= section.offsetTop - section.offsetHeight * 0.4 && 
            scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight * 0.4){

            let currentId = section.attributes.id.value;
            cleanActive();
            addActive(currentId);
        }
    });
}

onscroll = () =>{
    activeClassManagement();
    const nav = document.querySelector('.l-header');
    if(window.pageYOffset>0){
        nav.classList.add("shadow");
    }else{
        nav.classList.remove("shadow");
    }
};


onload = () =>{
    activeClassManagement();
};


let cleanActive = () => {
    document.querySelectorAll("ul a").forEach( (el) => {
        el.classList.remove("active");
    });
};

let addActive = (id) => {
    let selector = `ul a[href="#${id}"]`;
    document.querySelector(selector).classList.add("active");
}