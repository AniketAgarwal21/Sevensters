
const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");
const logo = document.querySelector('#logo');
const nav = document.querySelector('nav');
const bar = document.getElementById('bar');
const baru = document.getElementById('baru');
const bard = document.getElementById('bard');
const navitems = document.getElementsByClassName("nav-items");


let header_height = header.offsetHeight;
let section_height = section.offsetHeight

window.addEventListener("scroll", () => {
    if (window.scrollY >= 500) {
        nav.style.backgroundColor = "#151515";
    }
    else if (window.scrollY >= 300) {
        logo.style.color = '#fff';
        nav.style.backgroundColor = "transparent";
        bar.style.backgroundColor = "#fff";
        baru.style.backgroundColor = "#fff";
        bard.style.backgroundColor = "#fff";
        navitems[0].style.color = "#fff";
        navitems[1].style.color = "#fff";
        navitems[2].style.color = "#fff";
        navitems[3].style.color = "#fff";

    }
    else {
        logo.style.color = '#000';
        nav.style.backgroundColor = "transparent";
        bar.style.backgroundColor = "#000";
        baru.style.backgroundColor = "#000";
        bard.style.backgroundColor = "#000";
        navitems[0].style.color = "#000";
        navitems[1].style.color = "#000";
        navitems[2].style.color = "#000";
        navitems[3].style.color = "#000";    }


});

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();

    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height);
    })

    big_title.style.opacity = - scroll / (header_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;
    
    // content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
    // image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

    border.style.width = `${scroll / (sectionY.top + section_height) * 20}%`;

})


if (window.matchMedia("(min-width: 700px)").matches) {
    function openNav() {
        document.getElementById("mySidenav").style.width = "190px";
        document.getElementById("document").style.marginRight = "190px";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("document").style.marginRight = "0";
    }
}
else {
    function openNav(x) {
        x.classList.toggle("change");
        nav.classList.toggle("nav-height");
        document.getElementsByClassName('nav-items')[0].classList.toggle('visible-nav');
        document.getElementsByClassName('nav-items')[1].classList.toggle('visible-nav');
        document.getElementsByClassName('nav-items')[2].classList.toggle('visible-nav');
        document.getElementsByClassName('nav-items')[3].classList.toggle('visible-nav');
    }
}


