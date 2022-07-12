let checked = false
let openMenu = document.querySelector('.button-menu')
openMenu.addEventListener('click', () =>{
    let menuArea = document.querySelector('.menu-mobile');
    console.log('clicou')
    if (!checked){
        menuArea.classList.add('scale-up-ver-top')
        menuArea.classList.remove('scale-down-ver-top')
        checked = true
    } else{
        menuArea.classList.add('scale-down-ver-top')
        menuArea.classList.remove('scale-up-ver-top')
        checked = false
    }
})
