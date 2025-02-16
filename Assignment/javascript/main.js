
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    const logo =document.querySelector('.logo');
    const text = document.querySelector('.text') 
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = 'white';
        navbar.style.borderBottom = '1px solid gray';
        logo.src = 'https://stax.organicthemes.com/wp-content/uploads/2021/11/stax-logo-300x94.png';
        text.style.color = 'black';
    } else {
        navbar.style.backgroundColor = 'transparent';
        logo.src='../assets/logo.png';
        text.style.color = 'white';
        navbar.style.borderBottom = 'none';
    }
});

// const imgb = document.querySelector('.imgb');
// const black = document.querySelector('.black');
// imgb.addEventListener('mouseenter', ()=>{
//     black.style.display = 'block';
// })
// imgb.addEventListener('mouseleave', ()=>{
//     black.style.display = 'none';
// })