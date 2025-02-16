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




const categoryLinks = document.querySelectorAll('.category-link');

categoryLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const subList = this.nextElementSibling;

        this.classList.toggle('active');

        if (subList) {
            subList.style.display = subList.style.display === 'block' ? 'none' : 'block';
        }
    });
});

let btn2 = document.querySelectorAll('.card .buttons1 .button');

btn2.forEach((e)=>{
    let buttonMain = e.querySelector('button')
    let small = e.querySelector('small')
    buttonMain.addEventListener('mouseenter',()=>{
        buttonMain.style.backgroundColor='#ffba00'
        small.style.display='block';
        small.style.transform = 'translateX(0)' 
    })

    buttonMain.addEventListener('mouseleave',()=>{
        buttonMain.style.backgroundColor=''
        small.style.display='';
        small.style.transform = '' 
    })
})



const color = document.querySelectorAll('.fifth .main-container .container .left .card')
color.forEach((e)=>{
    let text = e.querySelector('.right h5');
    e.addEventListener('mouseenter',()=>{
        text.style.color='#ffba00';
    })

    e.addEventListener('mouseleave',()=>{
        text.style.color='';
    })
})
