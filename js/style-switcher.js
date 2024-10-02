// style switcher
const styleSwitcherToggle =()=>{
       let styleSwitcher = document.querySelector('.js-style-switcher')
       let styleSwitcherToggler = document.querySelector('.js-style-switcher-toggler')

       styleSwitcherToggler.addEventListener('click' , function(){
              console.log('hi' , styleSwitcher);
              styleSwitcher.classList.toggle('open')
              this.querySelector('i').classList.toggle('fa-times')
              this.querySelector('i').classList.toggle('fa-cog')
       })

}
styleSwitcherToggle()

const themeColor = () => {
       let hueSlider = document.querySelector('.js-hue-slider')
       let html = document.querySelector('html')

       const setHue = (value) => {
              html.style.setProperty('--hue', value)
              document.querySelector('.js-hue').innerHTML = value;
       }

       hueSlider.addEventListener('input', () => {
              setHue(hueSlider.value)

              localStorage.setItem('--hue', hueSlider.value)
       })
       const slider = (value) => {
              hueSlider.value = value
       }

       if (localStorage.getItem('--hue')) {
              setHue(localStorage.getItem('--hue'))
              slider(localStorage.getItem('--hue'))
       }else{
              let hue = getComputedStyle(html).getPropertyValue('--hue')
              setHue(hue)
              slider(hue)
       }

}
themeColor()


// change theme color dark and light theme

const themeLightDark =()=>{
       let darkMode = document.querySelector('.js-dark-mode')

       darkMode.addEventListener('click' , ()=>{
              if(darkMode.checked){
                     localStorage.setItem('theme' , 'theme-dark')
              }else{
                     localStorage.setItem('theme' , 'theme-light')
              }
              document.body.classList.toggle('theme-dark')
       })
       if(localStorage.getItem('theme') === 'theme-dark'){
              document.body.classList.add('theme-dark')
              darkMode.checked = true;

       }
       if(document.body.classList.contains('theme-dark')){
              darkMode.checked = true;
              document.body.classList.add('theme-dark')

       }
       
}
themeLightDark()

