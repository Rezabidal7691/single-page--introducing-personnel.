// const { AOS } = require("./aos")

//set animate aos
window.addEventListener('load' , ()=>{
       let preloader = document.querySelector('.preloader')
       preloader.classList.add('fade-out')
       setTimeout(() => {
              preloader.style.display = 'none'
              AOS.init();
       }, 1000);
}) 

/* header reveal */
let headerBg = ()=>{
       let header = document.querySelector('.js-header')
       window.addEventListener('scroll' , ()=>{
              if(this.scrollY > 0){
                     header.classList.add('bg-reveal')
              }else{
                     header.classList.remove('bg-reveal')

              }      
       })
}
headerBg()


const navigation = ()=>{
       
       let navToggler = document.querySelector('.js-nav-toggler')
       let nav = document.querySelector('.js-nav')
       let navItems = nav.querySelectorAll('li')
       const navToggle =()=>{
              console.log('hiiii');
              nav.classList.toggle('open')
              navToggler.classList.toggle('active')
       }
       navToggler.addEventListener('click' ,navToggle )
       navItems.forEach(li =>{
              li.addEventListener('click' , ()=>{
                     if(document.body.clientWidth <= 767){
                            navToggle()
                     }
              })
       })
}
navigation()