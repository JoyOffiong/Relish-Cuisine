const longLength = document.querySelector('.longtext');
const shortLength = document.querySelector('.shorttext');
const textButton = document.querySelector('.button');         


textButton.addEventListener('click', () => {
    if(shortLength.style.display === 'block'){
        shortLength.style.display = 'none'
        longLength.style.display = 'block'
        textButton.innerText='Show Less'
}
    else{
        longLength.style.display = 'none'
        shortLength.style.display = 'block'
        textButton.innerText= 'Discover More'
            }       
})

const menuButton=document.querySelector('.nav-toggle1');
const navMenu=document.querySelector('.primarynav');
const closeButton=document.querySelector('.nav-toggle2')
const mainWrap=document.querySelector('.bodywrap')

menuButton.addEventListener('click', () => {
  
    menuButton.style.display='none'
    closeButton.style.display = 'block'
    navMenu.style.transform = 'translateX(0%)'
    mainWrap.style.overflow='hidden'
    // navMenu.style.display='block'
    
   
})


closeButton.addEventListener('click', () => {
    // if(navigationMenu.style.transform = 'translateX(100%)'){
        closeButton.style.display='none'   
        menuButton.style.display = 'block' 
        navMenu.style.transform = 'translateX(-100%)'

        
})




