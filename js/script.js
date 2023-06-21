const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 100);
})

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle("bx-x")
    navlist.classList.toggle("open")
}

window.onscroll = () => {
    menu.classList.remove("bx-x")
    navlist.classList.toggle("open")

    // var element = document.getElementById('services');
    // if (isElementInViewport(element)) {
    //     element.classList.add("active");
    // } else {
    //     console.log('Not in the viewport... whomp whomp');
    // }
}

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}