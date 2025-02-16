console.log('js is running')
AOS.init();
// document.body.style.backgroundColor = 'black'
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



//Courousel
const outerContainer = document.querySelector('.second')
const mainContainer = document.querySelector('.outer-container');
const leftArrow = document.querySelector('.arrow-button .left');
const rightArrow = document.querySelector('.arrow-button .right');

rightArrow.addEventListener('click', () => {
    mainContainer.style.transition = 'none';
    mainContainer.style.transform = 'translateX(100%)';
    setTimeout(() => {
        mainContainer.style.transition = 'transform 0.5s ease-in-out';
        mainContainer.style.transform = 'translateX(0)';
    }, 50); 
});
leftArrow.addEventListener('click', () => {
    mainContainer.style.transition = 'none';
    mainContainer.style.transform = 'translateX(-100%)';
    setTimeout(() => {
        mainContainer.style.transition = 'transform 0.5s ease-in-out';
        mainContainer.style.transform = 'translateX(0)';
    }, 50);
});




//Cards

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



//section 3

//countdown

const countdownDate = new Date("Nov 25, 2024 12:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = countdownDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".countdown").innerHTML = "<h2>Time's up!</h2>";
    }
}
const countdownInterval = setInterval(updateCountdown, 1000);




const outerContainer1 = document.querySelector('.third .right')
const mainContainer1 = document.querySelector(' .right .outer-container');
const leftArrow1 = document.querySelector('.right .left-arr');
const rightArrow1 = document.querySelector('.right .right-arr');

rightArrow1.addEventListener('click', () => {
    mainContainer1.style.transition = 'none';
    mainContainer1.style.transform = 'translateX(100%)';
    setTimeout(() => {
        mainContainer1.style.transition = 'transform 0.5s ease-in-out';
        mainContainer1.style.transform = 'translateX(0)';
    }, 50); 
});
leftArrow1.addEventListener('click', () => {
    mainContainer1.style.transition = 'none';
    mainContainer1.style.transform = 'translateX(-100%)';
    setTimeout(() => {
        mainContainer1.style.transition = 'transform 0.5s ease-in-out';
        mainContainer1.style.transform = 'translateX(0)';
    }, 50);
});




//fifth section

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

