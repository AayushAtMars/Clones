const navbar = document.querySelector('.navbar')
const innerNav = document.querySelector('nav')

window.addEventListener('scroll',()=>{
    let y = window.scrollY
    // console.log(y)
    if(y>0){
        navbar.style.backgroundColor = 'white'
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'
        navbar.style.top = '0px'
        innerNav.style.boxShadow = '0 0px 0px rgba(0, 0, 0, 0)'
    }

    else{
        navbar.style.backgroundColor = 'transparent'
        navbar.style.boxShadow = '0 0px 0px rgba(0, 0, 0, 0)'
        navbar.style.top = '40px'
    }
})




//Upper Navbar
const dropdownLinks = document.querySelectorAll('.main li');

dropdownLinks.forEach((link) => {
    const dropdownToggle = link.querySelector('a');
    const dropdownMenu = link.querySelector('.dropdown');

    if (dropdownToggle && dropdownMenu) {
        dropdownToggle.addEventListener('mouseenter', () => {
            dropdownToggle.style.color = '#ffba00';
            dropdownMenu.style.display = 'block';
        });

        link.addEventListener('mouseleave', () => {
            dropdownMenu.style.display = 'none';
            dropdownToggle.style.color = '';
        });
        dropdownMenu.addEventListener('mouseenter', () => {
            dropdownMenu.style.display = 'block';
        });

        dropdownMenu.addEventListener('mouseleave', () => {
            dropdownMenu.style.display = 'none';
        });
    }
});



const dropMenu = document.querySelectorAll('.main .dropdown li')
// console.log(dropMenu)
dropMenu.forEach((e) => {
    e.addEventListener('mouseenter', () => {
        e.style.backgroundColor = '#ffba00'
        const link = e.querySelector('a');
        if (link) {
            link.style.color = 'white';
        }
    });

    e.addEventListener('mouseleave', () => {
        e.style.backgroundColor = ''
        const link = e.querySelector('a'); 
        if (link) {
            link.style.color = ''; 
        }
    });
})


//Hamburger
let bool = false;
const ham = document.querySelector('.ham');
const navresponsive = document.querySelector('.nav-res')
const container = document.querySelector('.nav-res .container');
ham.addEventListener('click',()=>{
    if(bool==false){
        navresponsive.style.display='block'
        ham.src="./Assets/cross.svg"
        bool = true;
    }
    else{
        navresponsive.style.display=''
        ham.src="./Assets/hamburger.svg"
        bool=false;
    }
})

//Responsive Navbar
const navRes = document.querySelectorAll('.nav-res ul li');
navRes.forEach((e)=>{
    const dropDwn = e.querySelector('.dropdown')
    const link = e.querySelector('a')
    e.addEventListener('mouseenter',()=>{
        dropDwn.style.display='block'
        link.style.color='#ffba00'
    })

    e.addEventListener('mouseleave',()=>{
        dropDwn.style.display='none'
        link.style.color=''
    })
})


const li = document.querySelectorAll('.nav-res .dropdown li')

li.forEach((e)=>{
    const a =e.querySelector('li a');
    e.addEventListener('mouseenter',()=>{
        e.style.backgroundColor='#ffba00'
        a.style.color='white'
    })

    e.addEventListener('mouseleave',()=>{
        e.style.backgroundColor=''
        a.style.color=''
    })
})